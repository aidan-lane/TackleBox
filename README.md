<p align="center">
  <img src="/frontend/icons/tacklebox_l.png" width=50% height=50%>
</p>


Term Project for Open Source Software Spring 2022

## About
TackleBox is a lightweight, customizable suspicious link detector. Rather than putting the stress on the user to analyze links themselves, TackleBox takes on that responsibility.  

[TackleBox Site](https://tacklebox-server.herokuapp.com/)  


## Developers

### Running Backend and Database
To start the backend API and Postgres database, make sure Docker is installed and run `docker compose up`

### Build Script
To generate the build files for the Chrome extension, run create_ext.sh. If you run into syntax errors, be sure to convert the file into UNIX format
``` dos2unix create_ext.sh ```