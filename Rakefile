require 'date'

desc "Create blog post with :name"
task :new_post, [:name] do |t, args|
  post_name = [Date.today.strftime("%Y-%m-%d"), "-", args[:name].downcase.gsub(" ","-"),".md"].join
  puts "Creating blog post with name: \n _posts/#{post_name}"
  File.open("_posts/#{post_name}", 'w') do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts "title: #{args[:name]}"
    f.puts "categories:"
    f.puts "- blog"
    f.puts "---"
    f.puts ""
  end

  ## Open the new post within vim
  exec "vim _posts/#{post_name}"
end
