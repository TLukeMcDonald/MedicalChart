class CreateMedicaitons < ActiveRecord::Migration[5.1]
  def change
    create_table :medicaitons do |t|
      t.string :package_label_principal_display_panel
      t.string :manufacturer_name
      t.string :unii
      t.string :product_type
      t.string :rxcui
      t.string :spl_set_id
      t.string :route
      t.string :generic_name
      t.string :brand_name
      t.string :product_ndc
      t.string :original_packager_product_ndc
      t.string :substance_name
      t.string :spl_id
      t.string :pharm_class_moa
      t.string :pharm_class_pe
      t.string :application_number
      t.string :nui
      t.string :pharm_class_epc
      t.string :package_ndc
      t.string :indications_and_usage
      t.string :dosage_and_administration

      t.timestamps
    end
    add_index :medicaitons, :manufacturer_name
  end
end
