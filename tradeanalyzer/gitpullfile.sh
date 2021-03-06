GIT_DIR="gitanalyzer"
BRANCH="feature/Ed_1_on_develop"


ECHO admin
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/admin
git pull origin $BRANCH

ECHO adminView
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/adminView
git pull origin $BRANCH

ECHO core
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/core
git pull origin $BRANCH

ECHO coreView
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/coreView
git pull origin $BRANCH

ECHO system
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/system
git pull origin $BRANCH

ECHO systemView
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/systemView
git pull origin $BRANCH


ECHO member logout
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/member/logout
git pull origin $BRANCH

ECHO member profile
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/member/profile
git pull origin $BRANCH

ECHO member session
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/member/session
git pull origin $BRANCH

ECHO memberView logout
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/memberView/logout
git pull origin $BRANCH

ECHO memberView profile
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/memberView/profile
git pull origin $BRANCH


ECHO member trade
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/member/trade
git pull origin $BRANCH

ECHO memberView trade
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer/src/main/js/memberView/trade
git pull origin $BRANCH


ECHO main
cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer
git pull origin $BRANCH