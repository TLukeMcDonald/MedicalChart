class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.text :problem
      t.date :event_date
      t.text :location
      t.text :status
      t.text :provider
      t.text :comments

      t.timestamps
    end
  end
end
