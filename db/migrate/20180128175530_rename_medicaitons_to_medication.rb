class RenameMedicaitonsToMedication < ActiveRecord::Migration[5.1]
  def self.up
    rename_table :medicaitons, :medications
  end

  def self.down
    rename_table :medications, :medicaitons
  end
end
