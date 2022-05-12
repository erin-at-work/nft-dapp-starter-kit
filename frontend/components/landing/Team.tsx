import styles from "@styles/Home.module.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const Team = () => {
  return (
    <div id="team">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.title}>Team</h1>
          <SimpleGrid columns={[1, 3, 5]} spacing="40px">
            <Box
              alignContent={"center"}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="placeholder image for team members"
                src={"/assets/usdc.png"}
                width={250}
                height={250}
              />
              <p className={styles.center}>
                <strong>Stable Ser</strong>
                <br />
                Community, Marketing
              </p>
            </Box>
            <Box
              alignContent={"center"}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="placeholder image for team members"
                src={"/assets/luna.png"}
                width={250}
                height={250}
              />
              <p className={styles.center}>
                <strong>Lunatic</strong>
                <br />
                Marketing, Tokenomics
              </p>
            </Box>
            <Box>
              <Box background="pink">
                <Image
                  alt="placeholder image for team members"
                  src={"/assets/eth2.png"}
                  width={250}
                  height={250}
                />
              </Box>
              <p className={styles.center}>
                <strong>Eth XOXO</strong>
                <br />
                Solidty, Art
              </p>
            </Box>
            <Box>
              <Image
                alt="placeholder image for team members"
                src={"/assets/cb.png"}
                width={250}
                height={250}
              />
              <p className={styles.center}>
                <strong>OG Coinbae</strong>
                <br />
                Code, Commmunity
              </p>
            </Box>
            <Box>
              <Box background="lightblue">
                <Image
                  alt="placeholder image for team members"
                  src={"/assets/sol2.png"}
                  width={250}
                  height={250}
                />
              </Box>
              <p className={styles.center}>
                <strong>Rusty Sol</strong>
                <br />
                Smart contracts, Security
              </p>
            </Box>
          </SimpleGrid>
        </main>
      </div>
    </div>
  );
};

export default Team;