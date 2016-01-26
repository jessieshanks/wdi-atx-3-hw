class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false, index: true
      t.integer :year, index: true
      t.text :poster_url
      t.timestamps
    end
  end
end
