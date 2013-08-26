class Photo < ActiveRecord::Base
  attr_accessible :url, :user_id

  has_many :tags
  has_many :friends, through: :tags, source: :friend
end
