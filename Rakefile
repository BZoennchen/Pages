desc "Build _site/"
task :drafts do
  puts "\n Remove site"
  status = system("rm -r ./_site ")
  puts "\n## Building site with drafts"
  status = system("bundle exec jekyll build . --drafts")
  puts status ? "Success" : "Failed"
  puts "\n## Serving a site build at #{Time.now.utc}"
  status = system("bundle exec jekyll serve . --drafts")
end

desc "Build _site/"
task :build do
  puts "\n Remove site"
  status = system("rm -r ./_site ")
  puts "\n## Building site"
  status = system("bundle exec jekyll build .")
  puts status ? "Success" : "Failed"
  puts "\n## Building a site build at #{Time.now.utc}"
end

desc "Commit _site/"
task :commit do
  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push origin source")
  puts status ? "Success" : "Failed"
end

desc "Deploy _site/ to main branch"
task :deploy do
  puts "\n## Deleting main branch"
  status = system("git branch -D main")
  puts status ? "Success" : "Failed"
  puts "\n## Creating new main branch and switching to it"
  status = system("git checkout -b main")
  puts status ? "Success" : "Failed"
  puts "\n## Forcing the _site subdirectory to be project root"
  status = system("git filter-branch --subdirectory-filter _site/ -f")
  puts status ? "Success" : "Failed"
  puts "\n## Switching back to source branch"
  status = system("git checkout source")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing all branches to origin"
  status = system("git push --all origin")
  puts status ? "Success" : "Failed"
end

desc "Commit and deploy _site/"
task :bcd => [:build, :commit, :deploy] do
end