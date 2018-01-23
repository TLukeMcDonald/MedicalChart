json.extract! record, :id, :problem, :event_date, :location, :status, :provider, :comments, :created_at, :updated_at
json.url record_url(record, format: :json)
