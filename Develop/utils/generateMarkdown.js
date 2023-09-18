const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
        return `![License](http://img.shields.io/badge/license-${license}-blue.svg)`
}
};



 const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `- [License](#License)`
  }
 };
 const renderLicenseSection = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `## License
    
    This application is covered by the ${license} license.`
  }
}