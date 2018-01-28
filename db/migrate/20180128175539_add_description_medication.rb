class AddDescriptionMedication < ActiveRecord::Migration[5.1]
  def change
    add_column :medications, :description, :string
  end
end
