// import React from "react";
// import styled from "styled-components";
// import Button from "./buttons/button";
// import { useLocation, useNavigate } from "react-router";
// import { AddRounded, WebRounded } from "@mui/icons-material";

// const Container = styled.div`
//   flex: 1;
//   background: ${({ theme }) => theme.navbar};
//   color: ${({ theme }) => theme.menu_primary_text};
//   font-weight: bold;
//   font-size: 22px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 14px 50px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//   @media only screen and (max-width: 600px) {
//     padding: 10px 12px;
//   }
// `;

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   let path = location.pathname.split("/");

//   const gotoCreatePost = () => {
//     navigate("/post");
//   };
//   const gottoHome = () => {
//     navigate("/");
//   };
//   console.log(path);
//   return (
//     <Container>
//       AI-Hussain
//       {path[1] === "post" ? (
//         <Button
//           text="Explore Posts"
//           leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
//           onClick={gottoHome}
//           type="secondary"
//         />
//       ) : (
//         <Button
//           text="Create new post"
//           leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
//           onClick={gotoCreatePost}
//         />
//       )}
//     </Container>
//   );
// };

// export default Navbar;
import React from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, WebRounded } from "@mui/icons-material";

// Import your logo image
import logo from "./ai-logo.png";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

// Styled Logo component
const Logo = styled.img`
  height: 100px; /* Adjust the height as needed */
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };
  const gottoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      {/* Render the logo */}
      <Logo src={logo} alt="Logo" />

      {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
          onClick={gottoHome}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={gotoCreatePost}
        />
      )}
    </Container>
  );
};

export default Navbar;
