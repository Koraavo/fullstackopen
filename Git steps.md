Create a repository on github.
steps:
<code>echo "# test" >> README.md</code>
<code>git init</code>
<code>git add README.md</code>
<code>git commit -m "first commit"</code>
<code>git branch -M main</code>
<code>git remote add origin https://github.com/Koraavo/test.git</code>
<code>git push -u origin main</code>

If you are versioning with git branch:
Create a new branch with the name part1.3
<code>git checkout -b "part1.3"</code>

work on the branch.
commit stuff
<code>git push --set-upstream origin part1.3</code>
then:

<code>git checkout main</code>
<code>git merge part1.3</code>

delete the branch
<code>git branch -d part1.3</code>

For adding a remote repo I use these commands

First, check your remote repositories with <code>git remote -v</code>
If you can't see upstream then use <code>git remote add upstream <URL></code>
Check again your remote repositories with <code>git remote -v</code>
