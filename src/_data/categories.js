// Categories are stored in src/_settings/categories.json so the admin panel can edit them.
import fs from "node:fs";
export default () => JSON.parse(fs.readFileSync("./src/_settings/categories.json", "utf8")).items;
