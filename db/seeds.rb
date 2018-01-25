# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
records = Record.create([
{problem:'Head Injury',event_date:'2/2/02',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Arm Injury',event_date:'2/2/03',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Chest Injury',event_date:'4/4/04',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Leg Injury',event_date:'5/5/05',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Stomac Ache',event_date:'6/6/06',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Head Injury2',event_date:'2/2/07',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment for second entry'},
{problem:'Arm Injury2',event_date:'2/2/07',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment for second entry'},
{problem:'Chest Injury2',event_date:'4/4/07',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment for second entry'},
{problem:'Leg Injury2',event_date:'5/5/07',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment for second entry'},
{problem:'Stomac Ache2',event_date:'6/6/07',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment for second entry'}
])
