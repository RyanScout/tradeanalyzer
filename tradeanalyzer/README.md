# tradeanalyzer

Copyright (C) 2016-2022 Ryan Trade International RTI


create directory gitanalyzer and clone all project into this directory  script depend on it. 

Initial Setup
clone the following java repos
https://github.com/seufster71/toasthub-core.git
https://github.com/seufster71/toasthub-member.git
https://github.com/seufster71/toasthub-security.git
https://github.com/seufster71/toasthub-admin.git
https://github.com/seufster71/toasthub-system.git
https://github.com/RyanScout/toasthub-trade.git
https://github.com/RyanScout/tradeanalyzer.git

clone db scripts
https://github.com/seufster71/toasthub-db.git

run command to pull and attach submodules (make sure directories are populated)
gitsubmodulesRyan.sh

setup database need to run both files
go to toasthub-db -> monolith -> tradeanalyzer
maindbload.sh
memberdbload.sh
memberdatadbload.sh

run npm install

start server

run npm start



#### This just to remember how to initially add a submodule. You do not need to execute these commands ####
place at src/main/js
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-core.git core
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-core.git coreView
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-admin.git admin
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-admin.git adminView
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-system.git system
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-system.git systemView

cd to src/main/js/member
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-session.git session
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-profile.git profile
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-react-member-logout.git logout

cd to src/main/js/memberView
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-member-profile.git profile
git submodule add -b feature/Ed_1_on_develop https://github.com/seufster71/toasthub-reactweb-member-logout.git logout

cd to src/main/js/member/trade
git submodule add -b feature/Ed_1_on_develop https://github.com/RyanScout/tradeanalyzer-react-trade.git trade

cd to src/main/js/memberView/trade
git submodule add -b feature/Ed_1_on_develop https://github.com/RyanScout/tradeanalyzer-reactweb-trade.git trade

#### Build react
cd to tradeanalyzer then run npm run build

#### Build and deploy
cd to toasthub-core then run  mvn install
cd to toasthub-security then run  mvn install
cd to toasthub-system then run mvn install
cd to toasthub-member then run  mvn install
cd to toasthub-admin then run  mvn install
cd to toasthub-trade then run  mvn install
cd to tradeanalyzer then run  mvn package
