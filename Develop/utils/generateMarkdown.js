const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
        return `![License](http://img.shields.io/badge/license-${license}-blue.svg)`
}
};