# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180128175539) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "medications", force: :cascade do |t|
    t.string "package_label_principal_display_panel"
    t.string "manufacturer_name"
    t.string "unii"
    t.string "product_type"
    t.string "rxcui"
    t.string "spl_set_id"
    t.string "route"
    t.string "generic_name"
    t.string "brand_name"
    t.string "product_ndc"
    t.string "original_packager_product_ndc"
    t.string "substance_name"
    t.string "spl_id"
    t.string "pharm_class_moa"
    t.string "pharm_class_pe"
    t.string "application_number"
    t.string "nui"
    t.string "pharm_class_epc"
    t.string "package_ndc"
    t.string "indications_and_usage"
    t.string "dosage_and_administration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.index ["manufacturer_name"], name: "index_medications_on_manufacturer_name"
  end

  create_table "records", force: :cascade do |t|
    t.text "problem"
    t.date "event_date"
    t.text "location"
    t.text "status"
    t.text "provider"
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "b_part"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
