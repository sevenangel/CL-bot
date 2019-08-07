// To filter by category in API, use subcategory name like :type_item_effect or :type_card_purple
// Don't forget the colon (:)
// Eg. https://api.poporing.life/get_item_list?includeCategory=:type_item_effect

export const category_list = [
    {
        name: "Item",
        subcategory: [
            {name: ":type_item_effect", title: "Effect", type_to_search: ["Effect"]},
            {name: ":type_item_potion", title: "Potion", type_to_search: ["Potion"]},
            {name: ":type_item_refine", title: "Refine", type_to_search: ["Refine"]},
            {name: ":type_item_scroll", title: "Scroll", type_to_search: ["Scroll"]},
            {name: ":type_item_material", title: "Material", type_to_search: ["Material"]},
            {name: ":type_item_holiday_material", title: "Holiday Material", type_to_search: ["Holiday Material"]},
            {name: ":type_item_pet_material", title: "Pet Material", type_to_search: ["Pet Material"]},
            {name: ":type_item_premium", title: "Premium", type_to_search: ["Limited Edition"]},
            {name: ":0", title: "---"},
            {name: ":type_item_all", title: "All Items", type_to_search: ["Effect", "Potion", "Refine", "Scroll", "Material", "Holiday Material", "Pet Material", "Limited Edition"]},
        ]
    },
    {
        name: "Cards",
        subcategory: [
            {
                name: ":type_card_white",
                title: "Common - White",
                type_to_search: ["Common Weapon Card", "Common Off-hand Card", "Common Shoe Card", "Common Headwear Card", "Common Cloak Card", "Common Armor Card", "Common Accessory Card"]
            },
            {
                name: ":type_card_green",
                title: "Uncommon - Green",
                type_to_search: ["Uncommon Weapon Card", "Uncommon Off-hand Card", "Uncommon Shoe Card", "Uncommon Headwear Card", "Uncommon Cloak Card", "Uncommon Armor Card", "Uncommon Accessory Card"]
            },
            {name: ":type_card_blue", title: "Rare - Blue", type_to_search: ["Rare Weapon Card", "Rare Off-hand Card", "Rare Shoe Card", "Rare Headwear Card", "Rare Cloak Card", "Rare Armor Card", "Rare Accessory Card"]},
            {name: ":type_card_purple", title: "Epic - Purple", type_to_search: ["Epic Weapon Card", "Epic Off-hand Card", "Epic Shoe Card", "Epic Headwear Card", "Epic Cloak Card", "Epic Armor Card", "Epic Accessory Card"]},
            {name: ":1", title: "---"},
            {name: ":type_card_weapon", title: "Weapon", type_to_search: ["Weapon Card", "Common Weapon Card", "Uncommon Weapon Card", "Rare Weapon Card", "Epic Weapon Card"]},
            {name: ":type_card_offhand", title: "Off-hand", type_to_search: ["Off-hand Card", "Common Off-hand Card", "Uncommon Off-hand Card", "Rare Off-hand Card", "Epic Off-hand Card"]},
            {name: ":type_card_shoe", title: "Shoe", type_to_search: ["Shoe Card", "Common Shoe Card", "Uncommon Shoe Card", "Rare Shoe Card", "Epic Shoe Card"]},
            {name: ":type_card_headwear", title: "Headwear", type_to_search: ["Headwear Card", "Common Headwear Card", "Uncommon Headwear Card", "Rare Headwear Card", "Epic Headwear Card"]},
            {name: ":type_card_garments", title: "Garments", type_to_search: ["Cloak Card", "Common Cloak Card", "Uncommon Cloak Card", "Rare Cloak Card", "Epic Cloak Card"]},
            {name: ":type_card_armor", title: "Armor", type_to_search: ["Armor Card", "Common Armor Card", "Uncommon Armor Card", "Rare Armor Card", "Epic Armor Card"]},
            {name: ":type_card_accessory", title: "Accessory", type_to_search: ["Accessory Card", "Common Accessory Card", "Uncommon Accessory Card", "Rare Accessory Card", "Epic Accessory Card"]},
            {name: ":2", title: "---"},
            {
                name: ":type_card_all", title: "All Cards", type_to_search: [
                    "Common Weapon Card", "Common Off-hand Card", "Common Shoe Card", "Common Headwear Card", "Common Cloak Card", "Common Armor Card", "Common Accessory Card",
                    "Uncommon Weapon Card", "Uncommon Off-hand Card", "Uncommon Shoe Card", "Uncommon Headwear Card", "Uncommon Cloak Card", "Uncommon Armor Card", "Uncommon Accessory Card",
                    "Rare Weapon Card", "Rare Off-hand Card", "Rare Shoe Card", "Rare Headwear Card", "Rare Cloak Card", "Rare Armor Card", "Rare Accessory Card",
                    "Epic Weapon Card", "Epic Off-hand Card", "Epic Shoe Card", "Epic Headwear Card", "Epic Cloak Card", "Epic Armor Card", "Epic Accessory Card",
                ]
            },
        ]
    },
    {
        name: "Blueprint",
        subcategory: [
            {name: ":type_blueprint_all", title: "All Blueprints", type_to_search: ["Blueprint"]},
        ]
    },
    {
        name: "Equipment",
        subcategory: [
            {name: ":type_equipment_weapon", title: "Weapon", type_to_search: ["Equipment - Weapons"]},
            {
                name: ":type_equipment_offhand",
                title: "Off-hand",
                type_to_search: ["Equipment - Off-hand", "Equipment - Off-hand - Bangle", "Equipment - Off-hand - Bracer", "Equipment - Off-hand - Holy Statue", "Equipment - Off-hand - Shield"]
            },
            {name: ":type_equipment_shoe", title: "Shoe", type_to_search: ["Equipment - Footgear"]},
            {name: ":type_equipment_headwear", title: "Headwear", type_to_search: ["Equipment - Headwear - Back", "Equipment - Headwear - Face", "Equipment - Headwear - Head", "Equipment - Headwear - Mouth", "Equipment - Headwear - Tail"]},
            {name: ":type_equipment_garments", title: "Garments", type_to_search: ["Equipment - Garment"]},
            {name: ":type_equipment_armor", title: "Armor", type_to_search: ["Equipment - Armor"]},
            {name: ":type_equipment_accessory", title: "Accessory", type_to_search: ["Equipment - Accessory"]},
            {name: ":3", title: "---"},
            {
                name: ":type_equipment_all", title: "All Equipment", type_to_search: [
                    "Equipment - Accessory", "Equipment - Armor", "Equipment - Footgear", "Equipment - Garment", "Equipment - Headwear - Back", "Equipment - Headwear - Face", "Equipment - Headwear - Head", "Equipment - Headwear - Mouth", "Equipment - Headwear - Tail", "Equipment - Off-hand", "Equipment - Off-hand - Bangle", "Equipment - Off-hand - Bracer", "Equipment - Off-hand - Holy Statue", "Equipment - Off-hand - Shield", "Equipment - Weapons"
                ]
            },
        ]
    }
];

export const flat_category_list = category_list.reduce((acc, cur) => [...acc, ...cur.subcategory.map(x => ({...x, full_title: cur.name + " " + x.title, category: {name: cur.name}}))], []).filter(row => row.title !== "---");
