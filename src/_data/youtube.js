// YouTube videos are stored in src/_settings/videos.json so the admin panel can edit them.
import fs from "node:fs";
export default () => JSON.parse(fs.readFileSync("./src/_settings/videos.json", "utf8"));
