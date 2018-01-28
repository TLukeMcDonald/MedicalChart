class AddBPartToRecord < ActiveRecord::Migration[5.1]
  def change
    add_column :records, :b_part, :integer
  end
end
