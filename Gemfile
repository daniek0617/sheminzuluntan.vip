source "https://rubygems.org"

# 主 Jekyll 引擎
gem "jekyll", "~> 4.3.0"

# Ruby 3+ 必需的本地服务器支持
gem "webrick"

# 插件组：用于支持 Jekyll 插件
group :jekyll_plugins do
  gem "jekyll-include-cache" # 用于缓存 include，提高构建效率
  gem "jekyll-feed"          # 自动生成 RSS feed
end

# 注意：不要使用 github-pages，因为它会锁定 Jekyll 到旧版本
