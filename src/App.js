import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CommitIdInput from "./components/CommitIdInput";
import PlatformSelector from "./components/PlatformSelector";
import EngineNameSelector from "./components/EngineNameSelector";
import DownloadLink from "./components/DownloadLink";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import "./App.css";
import logo from "./Prisma-IndigoLogo.png";

function App() {
  const [commitId, setCommitId] = useState("");
  const [platform, setPlatform] = useState("");
  const [engineName, setEngineName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (commitId && platform && engineName) {
      const baseUrl = "https://binaries.prisma.sh/all_commits";
      const generatedUrl = `${baseUrl}/${commitId}/${platform}/${engineName}.gz`;
      setUrl(generatedUrl);
    }
  }, [commitId, platform, engineName]);

  return (
    <Box className="App">
      <img
        src={logo}
        alt="Prisma Logo"
        style={{ width: "200px", marginBottom: "40px", marginTop: "10px" }}
      />
      <Typography variant="h4" gutterBottom style={{ marginBottom: "40px" }}>
        Prisma Engine Downloader
      </Typography>
      <div className="input-fields" style={{ marginBottom: "40px" }}>
        <Box sx={{ mb: 2, mr: 2 }}>
          <CommitIdInput commitId={commitId} setCommitId={setCommitId} />
        </Box>
        <Box sx={{ mb: 2, mr: 2 }}>
          <PlatformSelector platform={platform} setPlatform={setPlatform} />
        </Box>
        <Box sx={{ mb: 2, mr: 2 }}>
          <EngineNameSelector
            engineName={engineName}
            setEngineName={setEngineName}
          />
        </Box>
      </div>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DownloadLink
          url={url}
          disabled={!commitId || !platform || !engineName}
        />
      </Box>
      {url && (
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            Generated URL:{" "}
            <Link href={url} target="_blank" rel="noopener">
              {url}
            </Link>
          </Typography>
        </Box>
      )}
      <Card sx={{ mt: 4, p: 2, width: "80%", marginBottom: "40px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Instructions
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            To download Prisma engines, you need to construct a URL in the
            following format:
            <br />
            <code>
              https://binaries.prisma.sh/all_commits/
              {"{COMMIT_HASH}/{PLATFORM}/{ENGINE_NAME}.gz"}
            </code>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            <strong>COMMIT_HASH:</strong> This is the full commit hash from
            Prisma's GitHub repository. You can find the specific commit related
            to the release you want on the{" "}
            <Link
              href="https://github.com/prisma/prisma-engines/tags"
              target="_blank"
              rel="noopener"
            >
              tags page
            </Link>
            .
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            <strong>PLATFORM:</strong> This is the platform for which you want
            to download the engine. A full list of platforms can be found{" "}
            <Link
              href="https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#binarytargets-options"
              target="_blank"
              rel="noopener"
            >
              here
            </Link>
            .
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            <strong>ENGINE_NAME:</strong> This is the name of the engine you
            want to download. Options include:{" "}
            <i>
              libquery_engine.so.node, query-engine, migration-engine,
              introspection-engine, schema-engine(only for prisma v5.0.0+) and
              prisma-fmt.
            </i>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
