# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
records = Record.create([
{problem:'Head Injury',b_part:'1',  event_date:'2/2/2012',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Head Injury2',b_part:'1',  event_date:'2/2/2017',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Head Injury3',b_part:'1',  event_date:'8/2/2012',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Head Injury4',b_part:'1',  event_date:'9/2/2017',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Head Injury5',b_part:'1',  event_date:'10/2/2012',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Head Injury6',b_part:'1',  event_date:'11/12/2017',location:'New York, NY'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},

{problem:'Arm Injury',b_part:'2',  event_date:'2/2/2013',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Arm Injury2',b_part:'2',  event_date:'2/2/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment '},
{problem:'Arm Injury3',b_part:'2',  event_date:'8/2/2013',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Arm Injury4',b_part:'2',  event_date:'9/2/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment '},
{problem:'Arm Injury5',b_part:'2',  event_date:'10/2/2013',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Arm Injury6',b_part:'2',  event_date:'11/12/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Joe', comments:'This is an injury comment '},

{problem:'Chest Injury',b_part:'3',  event_date:'4/4/2014',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Chest Injury2',b_part:'3',  event_date:'4/4/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Chest Injury3',b_part:'3',  event_date:'8/4/2014',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Chest Injury4',b_part:'3',  event_date:'9/4/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Chest Injury5',b_part:'3',  event_date:'10/4/2014',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Chest Injury6',b_part:'3',  event_date:'11/14/2017',location:'New York, NY'  , status: ' Treated', provider: 'Dr Smith', comments:'This is an injury comment '},

{problem:'Back1',b_part:'4',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back2',b_part:'4',  event_date:'6/13/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back3',b_part:'4',  event_date:'6/17/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back4',b_part:'4',  event_date:'3/6/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back5',b_part:'4',  event_date:'7/6/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back6',b_part:'4',  event_date:'3/8/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Back7',b_part:'4',  event_date:'4/6/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},

{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Lower Back1',b_part:'5',  event_date:'6/4/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},

{problem:'Leg Injury',b_part:'6',  event_date:'5/5/2015',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Leg Injury2',b_part:'6',  event_date:'5/5/2017',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment '},
{problem:'Leg Injury3',b_part:'6',  event_date:'8/5/2015',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Leg Injury4',b_part:'6',  event_date:'9/5/2017',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment '},
{problem:'Leg Injury5',b_part:'6',  event_date:'10/5/2015',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment'},
{problem:'Leg Injury6',b_part:'6',  event_date:'11/15/2017',location:'Dallas, Tx'  , status: ' Resolved' , provider: 'Dr Joe', comments:'This is an injury comment '},

{problem:'Stomac Ache',b_part:'7',  event_date:'6/6/2016',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Stomac Ache2',b_part:'7',  event_date:'6/6/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Stomac Ache3',b_part:'7',  event_date:'8/6/2016',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Stomac Ache4',b_part:'7',  event_date:'9/6/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '},
{problem:'Stomac Ache5',b_part:'7',  event_date:'10/6/2016',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment'},
{problem:'Stomac Ache6',b_part:'7',  event_date:'11/16/2017',location:'Dallas, Tx'  , status: ' Ongoing', provider: 'Dr Smith', comments:'This is an injury comment '}
])
