ECHO getting submodules

GIT_DIR="gitanalyzer"
BRANCH="feature/Ryan_1_on_develop"

cd ~/$GIT_DIR/tradeanalyzer/tradeanalyzer
git submodule init
git submodule update
git submodule foreach git checkout $BRANCH
git submodule foreach git pull origin $BRANCH