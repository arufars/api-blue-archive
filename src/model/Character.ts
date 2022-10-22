import mongoose from "mongoose"

interface IModel {
  firstName: string
  lastName: string
  japanName: string
}

const NamesSchema = new mongoose.Schema<IModel>({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  japanName: { type: String, required: true },
})

interface ICharacter {
  name: string
  names: IModel
  age: string
  school: string
  birthday: string
  background: string
  height: string
  photoUrl: string
  image: string
  imageSchool: string
  imageSpecial: string[]
  hobbies: string[]
  voice: string
  voices: string
  role: string[]
  damageType: string
  armorType: string
  combatClass: string
  affinity: []
  weapon: string
  weaponUnique: string
  weaponImage: string
  realeaseDate: string
}

interface ICharacterModel extends ICharacter, mongoose.Document {
  toJSON(): ICharacter
}

const CharacterSchema = new mongoose.Schema<ICharacterModel>(
  {
    name: { type: String, required: true, unique: true },
    names: { type: NamesSchema, required: true },
    age: { type: String, required: true },
    school: { type: String, required: true },
    birthday: { type: String, required: true },
    background: { type: String, required: true },
    height: { type: String, required: true },
    photoUrl: { type: String, required: true },
    image: { type: String },
    imageSpecial: { type: [String] },
    imageSchool: { type: String },
    hobbies: { type: [String], required: true },
    voice: { type: String, required: true },
    voices: { type: String, required: true },
    role: { type: [String], required: true },
    damageType: { type: String, required: true },
    armorType: { type: String, required: true },
    combatClass: { type: String, required: true },
    affinity: { type: [], required: true },
    weapon: { type: String, required: true },
    weaponUnique: { type: String, required: true },
    weaponImage: { type: String, required: true },
    realeaseDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Character ||
  mongoose.model<ICharacterModel>("Character", CharacterSchema)
