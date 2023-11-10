import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  color: white;
`;

const Table = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (repos.length == 0) {
      const fetchData = async () => {
        await fetch("https://api.github.com/users/geisielmelo/repos").then((response) =>
          response.json().then((data) => setRepos(data))
        );
      };
      fetchData();
    }
  }, [repos]);

  return (
    <section>
      <Container>
        <ul>
          {repos.map((item) => (
            <li>
              {item.name} {item.created_at} {item.html_url} {item.language} {item.topics} {item.homepage}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Table;
