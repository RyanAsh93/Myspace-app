class AddLikedPersonsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_persons, :text
  end
end
