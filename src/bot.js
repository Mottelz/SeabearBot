const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)
const rita = require('rita')

const tweetBot = () => {
    markov = rita.RiMarkov(2)
    inputText = "Draped in the night by constellations shifting. A quiver in the cold. Her, a bonfire against cautionary winds, telling me to turn back or freeze out here. She thaws the permafrost, she melts the ice, and I want to fall through, into the lake below.We skirt around the idea. Laughing over fictions. But we have an understanding, unspoken and raw. It's like spare silver bullets, just in-case we miss the werewolf the first time around, and he just fucks off into the woods. Rye on ice, amber and smoke. Everyone laughing. I smile too. But it isn't worth the drink I sip, in reverence of your mercy. So I smashed the glass and pulled at her rings and dumped her music box and refused that it sing. The halo of lights that ran around her stall went dark one by one until dark covered all. But I heard the fortune teller’s machine start once again, and a card slid out in the dark and the din. You are far too beautiful for the likes of this face. The alligator meets the swan, the apocalypse meets grace. But I get to keep the horsemen and teeth away from you. I get to bend your ear for evenings far between and few. Time has healed us both, unharmed by former ghosts. Now we wander alone the snowy roads, speaking quietly in the folds of the blue gloam. Midnight departures, dreams of woven limbs. The smell of chamomile on my thread-worn sin. It's a little unstable here and it tastes just like gin. I saw the ghost of St. Peter steal the gold from a tooth he’d taken from the mouth of a lover on the loose. The only god damn thing left he could say was 'I’ve seen worse, I’ve seen worse in my day.' You shouldn't worry about things remanded, and the coming of the morning blue. I know the heart can get so heavy-handed. Decoding the signals, if you only knew. But that's why we've unmade the bed, to sleep and hide away, head to tired head. Until all we hear is nothing we said. I am a revenant body, lost in the wake. The foam of the ocean crawling up my legs. I had a dream it would end like this. The baptism couldn't hold in my soul. Eating animals and spitting gristle. Awaiting that old god to uphold any sense of urgency to warm the cold. Not that there's much up there to see. Just a throne made of gold and some fallen trees. Chained wrists connected to chained wrists, of some devil with red skin and rough spear. Snapping my fingers to get his attention before he realizes his father was a bastard. And I'm in love. And I have to get out of here. I am entombed by the dunes. Hair the color of hay, laid across my face. Unrepentant in my search for you. How such a deity spoke to such a lowly creature, it's beyond my comprehension."
    markov.loadText(inputText)
    var sentence = markov.generateSentences(2).toString().substring(0, 140).replace('.,','. ')
    bot.post('statuses/update', {
        status: sentence
    }, (err, data, response) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Markov status tweeted!', sentence)
        }
    }
    )
}

module.exports = tweetBot