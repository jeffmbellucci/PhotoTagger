class Friendship < ActiveRecord::Base
  attr_accessible :friendee_id, :friender_id
end
