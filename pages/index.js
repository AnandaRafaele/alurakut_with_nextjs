import { Box } from "../src/components/Box";
import { MainGrid } from "../src/components/MainGrid";
import { ProfileSideBar } from "../src/components/ProfileSideBar";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home() {
  const githubUser = "AnandaRafaele";
  const amigosComunidade = [
    "AnandaRafaele",
    "Hagleyson",
    "LucasPJS",
    "andersonmalheiro",
    "ivanjosiel",
    "xterikatx",
  ];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          {/* <Box>Action</Box> */}
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos da comunidade ({amigosComunidade.length})
            </h2>
            <ul>
              {amigosComunidade.map((amigo) => (
                <li>
                  <a href={`/users/${amigo}`}>
                    <img src={`https://github.com/${amigo}.png`} />
                    <span>{amigo}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
