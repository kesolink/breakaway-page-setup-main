import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCommunities, subscribe, getCommunity } from "../api/hive";
import "./communities.scss";
import Loader from "../components/loader/Loader";
import { HiUsers } from "react-icons/hi";
import { FaArrowUpRightDots, FaArrowUpShortWide } from "react-icons/fa6";
// import { gridIcon, listView } from "../icons/svg";

const Communitiess = () => {
  const [communityLists, setCommunityLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedOption, setSelectedOption] = useState("Rank");
  const [gridView, setGridView] = useState(false);

  const pinnedCommunitiesWebsties = {
    "hive-109272": "https://hiverally.com",
    "hive-115309": "https://digitalnetworkstate.media",
    "hive-140169": "https://hivevibes.co",
  };

  //test
  const pinnedCommunities = ["hive-109272", "hive-115309", "hive-140169"];

  useEffect(() => {
    setTimeout(() => {
      fetchCommunities();
    }, 1000);
  }, [searchQuery, selectedOption]);

  const handleSelectChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "Breakaway communities") {
      const filteredCommunities = communityLists.filter((c) =>
        pinnedCommunities.includes(c.name)
      );
      setCommunityLists(filteredCommunities);
    } else {
      await getCommunities(
        "",
        100,
        searchQuery || null,
        event.target.value,
        ""
      );
    }
  };

  const fetchCommunities = async () => {
    setLoading(true);
    try {
      const communities = await getCommunities(
        "",
        100,
        searchQuery || null,
        "rank",
        ""
      );

      const pinnedCommunitiesData = await Promise.all(
        pinnedCommunities.map(async (communityId) => {
          try {
            let _community = await getCommunity(communityId);
            if (_community) {
              const admins = _community.team
                .filter((member) => member[1] === "admin")
                .map((admin) => admin[0]);
              return { ..._community, isPinned: true, admins };
            } else {
              return _community;
            }
          } catch (error) {
            console.error(`Error fetching community ${communityId}:`, error);
            return null;
          }
        })
      );

      const mergedCommunities =
        (!searchQuery
          ? [...pinnedCommunitiesData, ...communities]
          : [...communities]) || [];

      if (selectedOption === "Breakaway communities") {
        const filteredCommunities = mergedCommunities.filter((c) =>
          pinnedCommunities.includes(c.name)
        );
        setCommunityLists(filteredCommunities);
      } else {
        setCommunityLists(mergedCommunities);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCommunitySearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="communities-wrapper">
      <div className="hero-text">
        <h1>Tokenized Breakaway Communities</h1>
        {/* <div className="search-wrapper">
          <input
            className="communities-search"
            value={searchQuery}
            type="text"
            placeholder="Search community"
            onChange={handleCommunitySearch}
          />
        </div> */}
      </div>
      <div className="community-section">
        {loading ? (
          <div className="communities-container">
            <Loader />
          </div>
        ) : communityLists.length > 0 ? (
          <div className="community-wrap">
            <div className="select-communities">
              <select
                className="select"
                name="communities"
                id="communities"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="Breakaway communities">
                  Breakaway communities
                </option>
                <option value="rank">Rank</option>
                <option value="new">New</option>
                <option value="subs">Members</option>
              </select>
            </div>
            <div className="community-box">
              {communityLists.map((c, i) => (
                <div className="box-container " key={i}>
                  <div className="box">
                    <div className="box-wrap-left ">
                      <div className="img-cover">
                      <img
                        className="pro-img"
                        src={`https://images.hive.blog/u/${c.name}/avatar`}
                        alt=""
                      />
                      </div>
                      <div className="box-left">
                        <Link className="title" to={`/community/hive-${c.id}`}>
                          {c.title}
                        </Link>
                        <span className="about">{c.about}</span>
                        <span className="about-phone">
                          {c.about.split(" ").slice(0, 100).join(" ")}
                        </span>
                        <div className="admins-wrapper">
                          <span>Admin:</span>
                          <div className="admins">
                            {c?.admins?.map((admin, i) => (
                              <div key={i} className="each-admin">
                                <span className="admin">@{admin}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="community-info">
                          <div className="info-left">
                            <div className="center-items">
                              <span className="info-num">{c.subscribers}</span>{" "}
                              <span className="info-icons">
                                <HiUsers size={14} />
                              </span>
                            </div>
                            <div className="center-items">
                              <span className="info-num">{c.num_pending}</span>{" "}
                              <span className="info-icons">
                                <FaArrowUpRightDots  size={14}/>
                              </span>
                            </div>
                            <div className="center-items">
                              <span className="info-num">{c.num_authors}</span>{" "}
                              <span className="info-icons">
                                <FaArrowUpShortWide size={14} />
                              </span>
                            </div>
                          </div>
                          <div className="btn-vist-phone">
                            {c.isPinned ? (
                              <button
                                className="btn glo-btnc"
                                onClick={() =>
                                  window.open(
                                    `${pinnedCommunitiesWebsties[c.name]}`,
                                    "_blank"
                                  )
                                }
                              >
                                Visit platform
                              </button>
                            ) : (
                              <Link to="/docker-setup" >
                                <h3 className="start">Start your community</h3>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="btn-wrap">
                      {c.isPinned ? (
                        <button
                          className="btn glo-btnc"
                          onClick={() =>
                            window.open(
                              `${pinnedCommunitiesWebsties[c.name]}`,
                              "_blank"
                            )
                          }
                        >
                          Visit platform
                        </button>
                      ) : (
                        <Link to="/docker-setup">Start your community</Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="communities-container">No community found</div>
        )}
      </div>
    </div>
  );
};

export default Communitiess;
