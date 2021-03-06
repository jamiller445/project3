const mongoose = require('mongoose');
const Item = require('./database/models/Item');

const items = [
    {
        name: "MSR Evo Snowshoes",
        category: "Snowshoes",
        serial_number: "MSR-SNOW-111",
        image: "https://www.rei.com/media/41b28533-1338-4955-8a6c-da0c10337a8d?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "MSR Evo Snowshoes",
        category: "Snowshoes",
        serial_number: "MSR-SNOW-112",
        image: "https://www.rei.com/media/41b28533-1338-4955-8a6c-da0c10337a8d?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "MSR Evo Snowshoes",
        category: "Snowshoes",
        serial_number: "MSR-SNOW-113",
        image: "https://www.rei.com/media/41b28533-1338-4955-8a6c-da0c10337a8d?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "MSR Whisperlite Universal",
        category: "Stoves",
        serial_number: "MSR-STOVE-111",
        image: "https://www.rei.com/media/03a5fe4b-33db-4250-8d8c-b50de912d9d6?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "MSR Whisperlite Universal",
        category: "Stoves",
        serial_number: "MSR-STOVE-112",
        image: "https://www.rei.com/media/03a5fe4b-33db-4250-8d8c-b50de912d9d6?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "MSR Whisperlite Universal",
        category: "Stoves",
        serial_number: "MSR-STOVE-113",
        image: "https://www.rei.com/media/03a5fe4b-33db-4250-8d8c-b50de912d9d6?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Passage 2",
        category: "Tents",
        serial_number: "REI-TENT-111",
        image: "https://www.rei.com/media/3e73042d-aded-4741-9b26-a8da7395b69e?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Passage 2",
        category: "Tents",
        serial_number: "REI-TENT-112",
        image: "https://www.rei.com/media/3e73042d-aded-4741-9b26-a8da7395b69e?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Passage 2",
        category: "Tents",
        serial_number: "REI-TENT-113",
        image: "https://www.rei.com/media/3e73042d-aded-4741-9b26-a8da7395b69e?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Trail Pod 30",
        category: "Sleeping Bags",
        serial_number: "REI-SLEEP-111",
        image: "https://www.rei.com/media/44f4874b-af2f-4c9c-a693-74ea311ea34c?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Trail Pod 30",
        category: "Sleeping Bags",
        serial_number: "REI-SLEEP-112",
        image: "https://www.rei.com/media/44f4874b-af2f-4c9c-a693-74ea311ea34c?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "REI Trail Pod 30",
        category: "Sleeping Bags",
        serial_number: "REI-SLEEP-113",
        image: "https://www.rei.com/media/44f4874b-af2f-4c9c-a693-74ea311ea34c?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "BearVault BV500 Food Container",
        category: "Accessories",
        serial_number: "BEARVAULT-ACC-111",
        image: "https://www.rei.com/media/f04e4f7f-f82a-4b7d-987e-7a90ba158f2b?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "BearVault BV500 Food Container",
        category: "Accessories",
        serial_number: "BEARVAULT-ACC-112",
        image: "https://www.rei.com/media/f04e4f7f-f82a-4b7d-987e-7a90ba158f2b?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "BearVault BV500 Food Container",
        category: "Accessories",
        serial_number: "BEARVAULT-ACC-113",
        image: "https://www.rei.com/media/f04e4f7f-f82a-4b7d-987e-7a90ba158f2b?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "Black Diamond Trail Trekking Poles",
        category: "Accessories",
        serial_number: "BD-ACC-111",
        image: "https://www.rei.com/media/64f83ef6-7981-4a3d-b247-68e71b1f2fe9?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "Black Diamond Trail Trekking Poles",
        category: "Accessories",
        serial_number: "BD-ACC-112",
        image: "https://www.rei.com/media/64f83ef6-7981-4a3d-b247-68e71b1f2fe9?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
    {
        name: "Black Diamond Trail Trekking Poles",
        category: "Accessories",
        serial_number: "BD-ACC-113",
        image: "https://www.rei.com/media/64f83ef6-7981-4a3d-b247-68e71b1f2fe9?size=646x485",
        condition: "New",
        number_of_times_rented: 0
    },
];

mongoose.connect('mongodb://localhost/gearbank');

items.map(data => {
    const item = new Item(data);
    item.save();
});