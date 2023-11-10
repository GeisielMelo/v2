import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TableTrUpMotion } from "./Motion";
import { Loading } from "./Loading";

const CustomSection = styled.section`
  padding-top: ${(props) => (props["data-loading"] ? "100px" : "0px")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  color: white;

  h1 {
    font-size: ${(props) => props.theme.font.size.bg};
    font-family: ${(props) => props.theme.font.family.one};
    margin-top: 50px;
  }

  p {
    font-family: ${(props) => props.theme.font.family.two};
    margin-bottom: 50px;
  }

  table {
    border-collapse: collapse;
    th {
      font-family: ${(props) => props.theme.font.family.one};
    }
    td {
      font-family: ${(props) => props.theme.font.family.two};
    }
  }
  tr,
  td,
  th {
    padding: 10px;
    text-align: center;
    text-transform: capitalize;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }
  li {
    margin: 0 10px;
    font-size: ${(props) => props.theme.font.size.es};
  }

  .content {
    &:hover {
      transition: background-color 0.2s ease;
      background-color: ${(props) => props.theme.color.cyan.transparent};
    }
  }

  .links {
    display: flex;
    gap: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: ${(props) => props.theme.color.white.default};
      &:hover {
        transition: color 0.2s ease-in-out;
        color: ${(props) => props.theme.color.cyan.default};
      }
    }
  }

  @media (max-width: 1080px) {
    padding: 0 10px;
    .topics {
      display: none;
    }
  }
`;

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    try {
      if (repos.length === 0) {
        const fetchData = async () => {
          const response = await fetch("https://api.github.com/users/geisielmelo/repos?sort=created");
          const data = await response.json();
          setRepos(data);
          setLoading(false);
        };
        fetchData();
      }
    } catch (error) {
      console.error("An error occurred while fetching Github data");
    }
  }, [repos]);

  const handleFormatYear = (string) => {
    const timestamp = new Date(string);
    return timestamp.getFullYear();
  };

  const handleFormatName = (string) => {
    return string.replace(/[-_]+/g, " ");
  };

  const handleDefineDelay = (index) => {
    // Transforms an integer into a decimal; for example, 1 becomes 0.1, or 11 becomes 1.1.
    const integerPart = Math.floor(index / 10);
    const decimalPart = index % 10;

    // Returns either the integer part, 0, or a decimal representation based on the decimal part.
    return integerPart === 0 ? (decimalPart === 0 ? 0 : `0.${decimalPart}`) : `${integerPart}.${decimalPart}`;
  };

  return (
    <CustomSection data-loading={loading}>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Archive</h1>
            <p>A big list of things I’ve worked on</p>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Title</th>
                  <th className="topics">Topics</th>
                  <th>Links</th>
                </tr>
              </thead>

              {repos.map((item, indice) => (
                <tbody className="content" key={item.id}>
                  <TableTrUpMotion delay={handleDefineDelay(indice)}>
                    <td >{handleFormatYear(item.created_at)}</td>
                    <td>{handleFormatName(item.name)}</td>
                    <td className="topics">
                      <ul>
                        <li>{item.language}</li>
                        {item.topics.map((topic, index) => (
                          <li key={index}>{handleFormatName(topic)}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="links">
                      <button onClick={() => console.log(item.html_url)}>
                        <GitHubIcon />
                      </button>
                      {item.homepage && (
                        <button onClick={() => console.log(item.homepage)}>
                          <OpenInNewIcon />
                        </button>
                      )}
                    </td>
                  </TableTrUpMotion>
                </tbody>
              ))}
            </table>
          </>
        )}
      </Container>
    </CustomSection>
  );
};

export default Table;
