// External Dependensies
import { Container, Div, Icon, Text } from "atomize";

// Local dependensies
import "./App.css";
import Logo from "./images/logo";

function App() {
  return (
    <Div className="App">
      <Container>
        <Div
          d="flex"
          align="center"
          style={{ gap: "10px" }}
          pos="absolute"
          w="100%"
        >
          <Logo width={30} height={30} fill="white" />
          <Div d="flex" flexDir="column" style={{ gap: "5px" }}>
            <Div w="15px" h="2" bg="white" />
            <Div w="15px" h="2" bg="white" />
            <Div w="15px" h="2" bg="white" />
          </Div>
          <Div>
            <Text textColor="white">MENU</Text>
          </Div>
        </Div>

        <Div>
          <Div m={{ t: "400px" }} d="flex" align="end" style={{ gap: "10px" }}>
            <Text textSize="100px" textColor="white">
              Cactus
            </Text>
            <Text textSize="30px" textColor="white">
              is customer deeply
            </Text>
          </Div>
          <Div m={{ t: "100px" }} d="flex" align="end" style={{ gap: "10px" }}>
            <Text textSize="30px" textColor="white">
              disappointed
            </Text>
            <Text textSize="100px" textColor="white">
              in life
            </Text>
          </Div>
          <Text textSize={20} m={{ y: "100px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </Text>
          <Div w="300px" d="flex" align="center" justify="center" rounded="xl">
            <Text p={{ l: "10px", y: "10px" }}></Text>
            More Information
            <Div
              w="50px"
              h="100%"
              bg="white"
              d="flex"
              align="center"
              justify="center"
              rounded="50%"
            >
              <Icon name="RightArrow" size="20px" />
            </Div>
          </Div>
        </Div>
        <Div
          bg="white"
          d="flex"
          justify="space-between"
          align="center"
          p={{ y: "50px" }}
        >
          <Logo width={30} height={30} fill="black" />
          <Text>All rights reseved</Text>
          <Text>+996 996 996</Text>
        </Div>
      </Container>
    </Div>
  );
}

export default App;
