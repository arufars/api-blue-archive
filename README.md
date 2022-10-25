
# Blue Archive API

  

Author: [tuturu](https://github.com/arufars)\
endpoint: https://api-blue-archive.vercel.app

  
  

![](https://img.shields.io/website?down_message=offline&style=flat-square&up_message=online&url=https%3A%2F%2Fapi-blue-archive.vercel.app%2F)

![](https://img.shields.io/github/last-commit/Marineux/api-blue-archive?style=flat-square)

![](https://img.shields.io/github/commit-activity/m/Marineux/api-blue-archive/main)

  

# Overview

  

This is an open source API providing character information about the Blue Archive.This information is sourced from the public, i do not claim to own it.

> Still a demo, this application v1

  

# Technologies use

  

Nextjs, MongoDB, Mongoose, Vercel, Nextjscors, Typescript, Tailwindcss ( UI )

  

# Route

  

All Route and Example results

  

### Get all characters Blue Archive ( By default 20 )

  

> endpoint : [`/api/characters`](https://api-blue-archive.vercel.app/api/v1/characters)

  

```json

{

"_id": "634105b907843834fd29f006",

"name": "Airi",

"school": "Trinity",

"birthday": "January 30",

"photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/96/Airi.png/266px-Airi.png",

"imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png",

"damageType": "Explosive"

}

```

  

### Get all characters pagination ( 20 )

  

> endpoint :    [`/api/characters?page=NUMBER&perPage=NUMBER`](https://api-blue-archive.vercel.app/api/v1/characters?page=1&perPage=20)

  

```json

{

"_id": "6341063807843834fd29f0aa",

"name": "Iori",

"school": "Gehenna",

"birthday": "November 8",

"photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/26/Iori.png/266px-Iori.png",

"imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png",

"damageType": "Penetration"

}

```

  

### Get characters with a specific name, choice Asuna, Hibiki

  

> endpoint : [`/api/characters?name=Aru`](https://api-blue-archive.vercel.app/api/v1/characters?name=Aru)
> you can choose a `query` other than `name`, [more](#query)

  

```json

{

"_id": "634105c607843834fd29f01a",

"name": "Aru",

"school": "Gehenna",

"birthday": "March 12",

"photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/d/db/Aru.png/266px-Aru.png",

"imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png",

"damageType": "Explosive"

}

```

  

### Get random character ( 1 )

  

> endpoint : [`/api/character/random`](https://api-blue-archive.vercel.app/api/character/random)

  

> You can use query count to get more than 1 character
> endpoint : [`/api/character/random?count=NUMBER`](http://localhost:3000/api/character/random?count=2)

  



  

```json

{

"_id": "634106a407843834fd29f11a",

"name": "Miyako",

"names": {

"firstName": "Miyako",

"lastName": "Tsukiyuki",

"japanName": " 月雪 ミヤコ",

"_id": "634106a407843834fd29f11b"

},

"age": "15",

"school": "SRT",

"birthday": "January 7",

"photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3e/Miyako.png/266px-Miyako.png",

"imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png"

}

```

  

### Get all students specific ( By default 4 )

  > endpoint : [`/api/characters/students`](https://api-blue-archive.vercel.app/api/v1/characters/students)

  

```json

{

{

"_id": "634105c207843834fd29f012",

"name": "Ako",

"names": {

"firstName": "Ako",

"lastName": "Amau",

"japanName": " 天雨 アコ"

},

"age": "17",

"school": "Gehenna",

"birthday": "December 22",

"background": "A student of Gehenna Academy, Ako is the executive officer of the Disciplinary Committee, and a sort-of secretary to its president Hina. At first glance she may appear kind and good-natured, but Ako has zero tolerance for students who break the rules. She is constantly at Hina's side, assisting in her duties as president of the Disciplinary Committee. This has prompted other students to call her \"Hina's Pet\" amongst other things, but Ako doesn't particulary care.",

"height": "165cm",

"photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/72/Ako.png/266px-Ako.png",

"imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png",

"hobbies": [

"President Hina"

],

"voice": "Kouno Marika",

"voices": "https://static.miraheze.org/bluearchivewiki/a/aa/Ako_Title.ogg",

"role": [

"Support/Back",

"Support",

"Back"

],

"damageType": "Mystic",

"armorType": "Heavy",

"affinity": [

{

"urban": "https://static.miraheze.org/bluearchivewiki/thumb/1/13/Icon_location_city.png/24px-Icon_location_city.png",

"urbanEmotion": "https://static.miraheze.org/bluearchivewiki/thumb/8/81/Icon_mood_d.png/20px-Icon_mood_d.png"

},

{

"outdoors": "https://static.miraheze.org/bluearchivewiki/thumb/6/6d/Icon_location_outdoors.png/24px-Icon_location_outdoors.png",

"outdoorsEmotion": "https://static.miraheze.org/bluearchivewiki/thumb/5/5f/Icon_mood_b.png/20px-Icon_mood_b.png"

},

{

"indoors": "https://static.miraheze.org/bluearchivewiki/thumb/c/c1/Icon_location_indoors.png/24px-Icon_location_indoors.png",

"indoorsEmotion": "https://static.miraheze.org/bluearchivewiki/thumb/e/e3/Icon_mood_s.png/20px-Icon_mood_s.png"

}

],

"weapon": "HG",

"weaponUnique": "Hotshot",

"weaponImage": "https://static.miraheze.org/bluearchivewiki/6/6f/Weapon_Icon_20008.png",

"realeaseDate": "2021/11/17"

},

}

```

  

 <h3 id="query">All Query</h3>
All keys can make requests from query

| Query |
|-------|
| `name` | 
| `names` |
| `age`	|
| `birthday`|
| `heigth`|
| `school`|
| `hobbies`|
| `voice`|
| `damageType`|
| `role`|
|`armorType`|
| `affinity`|
| `weapon`|
| `realeaseDate`|


  

# Error Handling

  

Ask for assistance from us if you need it or if something doesn't seem to be working right.

  

<br />

  

# License

  

This project is licensed under the MIT License - see the [LICENSE](https://github.com/arufars/api-blue-archive/blob/main/LICENSE) file for details

  

<br />

  

# Acknowledgments

  

- [Blue Archive](https://bluearchive.wiki/wiki/Main_Page)