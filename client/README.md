Instructions

clone/git

git clone git@github.com:RyanAsh93/starter-setup.git <ProjectName>
remove origin
cd into project
git remote rm origin
create a new repo and add new origin
git add remote origin <ulr>

Rails

cd <ProjectName>
run bundle
in config/database yml replace database name to something else
in this case that would be starter_setup_...
rails db:create db:migrate db:seed
rails s -p 3001
check this route http://localhost:3001 

React

cd <ProjectName>/client
run yarn
run yarn start
open http://localhost:3000 (make sure rails is on port 3001)
