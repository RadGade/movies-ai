import React from 'react';
import MovieList from './MovieList'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Main = React.createClass({
    getInitialState() {
        return {
            like: [],
            dislike: [],
            uncategorized: [
                {
                    'poster_path': '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
                    'adult': false,
                    'overview': 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
                    'release_date': '2016-08-03',
                    'genre_ids': [
                        14,
                        28,
                        80
                    ],
                    'id': 297761,
                    'original_title': 'Suicide Squad',
                    'original_language': 'en',
                    'title': 'Suicide Squad',
                    'backdrop_path': '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
                    'popularity': 40.144854,
                    'vote_count': 1658,
                    'video': false,
                    'vote_average': 5.91
                },
                {
                    'poster_path': '/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg',
                    'adult': false,
                    'overview': 'Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.',
                    'release_date': '2016-08-25',
                    'genre_ids': [
                        80,
                        28,
                        53
                    ],
                    'id': 278924,
                    'original_title': 'Mechanic: Resurrection',
                    'original_language': 'en',
                    'title': 'Mechanic: Resurrection',
                    'backdrop_path': '/3oRHlbxMLBXHfMqUsx1emwqiuQ3.jpg',
                    'popularity': 23.12487,
                    'vote_count': 186,
                    'video': false,
                    'vote_average': 4.48
                },
                {
                    'poster_path': '/lw0IqOSMsQcy1QnVIEIDppLmNwk.jpg',
                    'adult': false,
                    'overview': 'A group of teens break into a blind man\'s home thinking they\'ll get away with the perfect crime. They\'re wrong.',
                    'release_date': '2016-08-25',
                    'genre_ids': [
                        27,
                        53
                    ],
                    'id': 300669,
                    'original_title': 'Don\'t Breathe',
                    'original_language': 'en',
                    'title': 'Don\'t Breathe',
                    'backdrop_path': '/bCThHXQ3aLLDU3KFST0rC8mTan5.jpg',
                    'popularity': 7.645102,
                    'vote_count': 55,
                    'video': false,
                    'vote_average': 6.45
                },
                {
                    'poster_path': '/sRxazAAodkAWVPJighRAsls2zCo.jpg',
                    'adult': false,
                    'overview': 'A falsely accused nobleman survives years of slavery to take vengeance on his best friend who betrayed him.',
                    'release_date': '2016-08-17',
                    'genre_ids': [
                        12,
                        36,
                        18
                    ],
                    'id': 271969,
                    'original_title': 'Ben-Hur',
                    'original_language': 'en',
                    'title': 'Ben-Hur',
                    'backdrop_path': '/A4xbEpe9LevQCdvaNC0z6r8AfYk.jpg',
                    'popularity': 7.480808,
                    'vote_count': 84,
                    'video': false,
                    'vote_average': 3.82
                },
                {
                    'poster_path': '/3S7V2Jd2G61LltoCsYUj4GwON5p.jpg',
                    'adult': false,
                    'overview': 'A woman with a seemingly perfect life - a great marriage, overachieving kids, beautiful home, stunning looks and still holding down a career. However she\'s over-worked, over committed and exhausted to the point that she\'s about to snap. Fed up, she joins forces with two other over-stressed moms and all go on a quest to liberate themselves from conventional responsibilities, going on a wild un-mom like binge of freedom, fun and self-indulgence - putting them on a collision course with PTA Queen Bee Gwendolyn and her clique of devoted perfect moms.',
                    'release_date': '2016-07-28',
                    'genre_ids': [
                        35
                    ],
                    'id': 376659,
                    'original_title': 'Bad Moms',
                    'original_language': 'en',
                    'title': 'Bad Moms',
                    'backdrop_path': '/l9aqTBdafSo0n7u0Azuqo01YVIC.jpg',
                    'popularity': 6.240872,
                    'vote_count': 121,
                    'video': false,
                    'vote_average': 5.43
                },
                {
                    'poster_path': '/39ia8d9HPZlnYuEX5w2Gk25Tpgs.jpg',
                    'adult': false,
                    'overview': 'Morgan is about a corporate risk-management consultant who has to decide and determine whether or not to terminate an artificial being\'s life that was made in a laboratory environment.',
                    'release_date': '2016-09-02',
                    'genre_ids': [
                        53,
                        878
                    ],
                    'id': 377264,
                    'original_title': 'Morgan',
                    'original_language': 'en',
                    'title': 'Morgan',
                    'backdrop_path': '/j8h0zfecahJlamSle54UP3AP2k3.jpg',
                    'popularity': 5.55994,
                    'vote_count': 13,
                    'video': false,
                    'vote_average': 6.35
                },
                {
                    'poster_path': '/3mCcVbVLz23MhCngELFihX2uSwb.jpg',
                    'adult': false,
                    'overview': 'XOXO follows six strangers whose lives collide in one frenetic, dream-chasing, hopelessly romantic night.',
                    'release_date': '2016-08-26',
                    'genre_ids': [
                        18
                    ],
                    'id': 352492,
                    'original_title': 'XOXO',
                    'original_language': 'en',
                    'title': 'XOXO',
                    'backdrop_path': '/dP3bxMPEDc9eNN2nH9P5YyhS27p.jpg',
                    'popularity': 5.31845,
                    'vote_count': 17,
                    'video': false,
                    'vote_average': 6.21
                },
                {
                    'poster_path': '/rQ3CKv33u2Z4keC2AYZqi3RGIdX.jpg',
                    'adult': false,
                    'overview': 'An ex-con reunites with his estranged wayward 16-year old daughter to protect her from drug dealers who are trying to kill her.',
                    'release_date': '2016-08-11',
                    'genre_ids': [
                        28,
                        53
                    ],
                    'id': 309886,
                    'original_title': 'Blood Father',
                    'original_language': 'en',
                    'title': 'Blood Father',
                    'backdrop_path': '/i5L4oUX9gaKAPHIoAOFGVnY2tkq.jpg',
                    'popularity': 5.166283,
                    'vote_count': 37,
                    'video': false,
                    'vote_average': 5.57
                },
                {
                    'poster_path': '/e9Rzr8Hhu3pqdJtdDLC52PerLk1.jpg',
                    'adult': false,
                    'overview': 'Pete is a mysterious 10-year-old with no family and no home who claims to live in the woods with a giant, green dragon named Elliott. With the help of Natalie, an 11-year-old girl whose father Jack owns the local lumber mill, forest ranger Grace sets out to determine where Pete came from, where he belongs, and the truth about this dragon.',
                    'release_date': '2016-08-10',
                    'genre_ids': [
                        12,
                        10751,
                        14
                    ],
                    'id': 294272,
                    'original_title': 'Pete\'s Dragon',
                    'original_language': 'en',
                    'title': 'Pete\'s Dragon',
                    'backdrop_path': '/AaRhHX0Jfpju0O6hNzScPRgX9Mm.jpg',
                    'popularity': 5.082739,
                    'vote_count': 81,
                    'video': false,
                    'vote_average': 5.14
                },
                {
                    'poster_path': '/pEFRzXtLmxYNjGd0XqJDHPDFKB2.jpg',
                    'adult': false,
                    'overview': 'A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from an adrift rowboat.',
                    'release_date': '2016-09-02',
                    'genre_ids': [
                        18
                    ],
                    'id': 283552,
                    'original_title': 'The Light Between Oceans',
                    'original_language': 'en',
                    'title': 'The Light Between Oceans',
                    'backdrop_path': '/2Ah63TIvVmZM3hzUwR5hXFg2LEk.jpg',
                    'popularity': 5.050285,
                    'vote_count': 14,
                    'video': false,
                    'vote_average': 4.79
                },
                {
                    'poster_path': '/43Gr00IiZtq2dOtYZQVOTwMf3kI.jpg',
                    'adult': false,
                    'overview': 'On January 15, 2009, the world witnessed the \'Miracle on the Hudson\' when Captain \'Sully\' Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.',
                    'release_date': '2016-09-08',
                    'genre_ids': [
                        36,
                        18
                    ],
                    'id': 363676,
                    'original_title': 'Sully',
                    'original_language': 'en',
                    'title': 'Sully',
                    'backdrop_path': '/qPH9AaheQYtuLrx4e6NJUyUzIMn.jpg',
                    'popularity': 4.657752,
                    'vote_count': 11,
                    'video': false,
                    'vote_average': 5
                },
                {
                    'poster_path': '/oeUpeSMGzZE3BXzaIUDWzCGB46Y.jpg',
                    'adult': false,
                    'overview': 'In the epic fantasy, scruffy, kindhearted Kubo ekes out a humble living while devotedly caring for his mother in their sleepy shoreside village. It is a quiet existence – until a spirit from the past catches up with him to enforce an age-old vendetta. Suddenly on the run from gods and monsters, Kubo’s chance for survival rests on finding the magical suit of armor once worn by his fallen father, the greatest samurai the world has ever known. Summoning courage, Kubo embarks on a thrilling odyssey as he faces his family’s history, navigates the elements, and bravely fights for the earth and the stars.',
                    'release_date': '2016-08-18',
                    'genre_ids': [
                        12,
                        16,
                        14,
                        10751
                    ],
                    'id': 313297,
                    'original_title': 'Kubo and the Two Strings',
                    'original_language': 'en',
                    'title': 'Kubo and the Two Strings',
                    'backdrop_path': '/akd0Z0OiR20btITvmvweDcJ3m8H.jpg',
                    'popularity': 4.46825,
                    'vote_count': 44,
                    'video': false,
                    'vote_average': 6.76
                },
                {
                    'poster_path': '/9Qzt2ywgaoQCIA3WtQSqRccCJaL.jpg',
                    'adult': false,
                    'overview': 'Akira Sharma is your average Jane from Jodhpur. Early in life she sees an atrocity committed on a neighbour and learns to defend herself. And, a spitfire is born.',
                    'release_date': '2016-09-02',
                    'genre_ids': [
                        28,
                        80,
                        53
                    ],
                    'id': 404579,
                    'original_title': 'Akira',
                    'original_language': 'hi',
                    'title': 'Akira',
                    'backdrop_path': '/isvDld40y5u3Xp7GL60ZWHa3NsK.jpg',
                    'popularity': 3.978553,
                    'vote_count': 5,
                    'video': false,
                    'vote_average': 6.8
                },
                {
                    'poster_path': '/wJXku1YhMKeuzYNEHux7XtaYPsE.jpg',
                    'adult': false,
                    'overview': 'Based on a true story, “War Dogs” follows two friends in their early 20s living in Miami during the first Iraq War who exploit a little-known government initiative that allows small businesses to bid on U.S. Military contracts.  Starting small, they begin raking in big money and are living the high life.  But the pair gets in over their heads when they land a 300 million dollar deal to arm the Afghan Military—a deal that puts them in business with some very shady people, not the least of which turns out to be the U.S. Government.',
                    'release_date': '2016-08-18',
                    'genre_ids': [
                        10752,
                        35,
                        18
                    ],
                    'id': 308266,
                    'original_title': 'War Dogs',
                    'original_language': 'en',
                    'title': 'War Dogs',
                    'backdrop_path': '/2cLndRZy8e3das3vVaK3BdJfRIi.jpg',
                    'popularity': 3.844543,
                    'vote_count': 71,
                    'video': false,
                    'vote_average': 5.46
                },
                {
                    'poster_path': '/aRRLpsusORQxOpFkZvXdk00TkoY.jpg',
                    'adult': false,
                    'overview': 'Nate Foster, a young, idealistic FBI agent, goes undercover to take down a radical white supremacy terrorist group. The bright up-and-coming analyst must confront the challenge of sticking to a new identity while maintaining his real principles as he navigates the dangerous underworld of white supremacy. Inspired by real events.',
                    'release_date': '2016-08-19',
                    'genre_ids': [
                        80,
                        18,
                        53
                    ],
                    'id': 374617,
                    'original_title': 'Imperium',
                    'original_language': 'en',
                    'title': 'Imperium',
                    'backdrop_path': '/ofDKlVlKk7Mfam9yw9CkjM8yUrf.jpg',
                    'popularity': 3.581128,
                    'vote_count': 40,
                    'video': false,
                    'vote_average': 6.23
                },
                {
                    'poster_path': '/1znpY0yx1dg0fVwaP7vtBeOTous.jpg',
                    'adult': false,
                    'overview': 'Veeram  is an upcoming Indian epic historical drama film written and directed by Jayaraj. It is an adaptation of William Shakespeare\'s play, Macbeth, and is the fifth installment in Jayaraj\'s Navarasa series.',
                    'release_date': '2016-09-02',
                    'genre_ids': [
                        28,
                        36,
                        18
                    ],
                    'id': 413637,
                    'original_title': 'Veeram',
                    'original_language': 'hi',
                    'title': 'Veeram',
                    'backdrop_path': null,
                    'popularity': 3.3059,
                    'vote_count': 2,
                    'video': false,
                    'vote_average': 7
                },
                {
                    'poster_path': '/rMev9yIIQkAk2odkMVnM8hszPVd.jpg',
                    'adult': false,
                    'overview': 'A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family\'s farm in West Texas.',
                    'release_date': '2016-08-12',
                    'genre_ids': [
                        80,
                        18
                    ],
                    'id': 338766,
                    'original_title': 'Hell or High Water',
                    'original_language': 'en',
                    'title': 'Hell or High Water',
                    'backdrop_path': '/5GbRKOQSY08U3SQXXcQAKEnL2rE.jpg',
                    'popularity': 3.246816,
                    'vote_count': 32,
                    'video': false,
                    'vote_average': 6.97
                },
                {
                    'poster_path': '/1SWIUZp4Gi2B6VxajpPWKhkbTMF.jpg',
                    'adult': false,
                    'overview': 'The legendary Roberto Duran and his equally legendary trainer Ray Arcel change each other\'s lives.',
                    'release_date': '2016-08-26',
                    'genre_ids': [
                        18
                    ],
                    'id': 184341,
                    'original_title': 'Hands of Stone',
                    'original_language': 'en',
                    'title': 'Hands of Stone',
                    'backdrop_path': '/pqRJD5RE5DgRQ1Mq4kSZHmMjozn.jpg',
                    'popularity': 3.17932,
                    'vote_count': 24,
                    'video': false,
                    'vote_average': 3.69
                },
                {
                    'poster_path': '/oe9gwRBrLEbKIofWrCpenR0pUmB.jpg',
                    'adult': false,
                    'overview': 'A man, shaken by fate after his wife\'s death, chooses to be a monk.',
                    'release_date': '2016-08-31',
                    'genre_ids': [
                        18
                    ],
                    'id': 255160,
                    'original_title': 'Na mlečnom putu',
                    'original_language': 'en',
                    'title': 'On the Milky Road',
                    'backdrop_path': null,
                    'popularity': 3.005641,
                    'vote_count': 3,
                    'video': false,
                    'vote_average': 8.5
                },
                {
                    'poster_path': '/v0krYaMdqD9uxFuFiWhEyKKIaw5.jpg',
                    'adult': false,
                    'overview': 'Elite snipers Brandon Beckett (Chad Michael Collins) and Richard Miller (Billy Zane) tasked with protecting a gas pipeline from terrorists looking to make a statement. When battles with the enemy lead to snipers being killed by a ghost shooter who knows their exact location, tensions boil as a security breach is suspected. Is there someone working with the enemy on the inside? Is the mission a front for other activity? Is the Colonel pulling the strings?',
                    'release_date': '2016-08-02',
                    'genre_ids': [
                        28,
                        18,
                        10752
                    ],
                    'id': 407375,
                    'original_title': 'Sniper: Ghost Shooter',
                    'original_language': 'en',
                    'title': 'Sniper: Ghost Shooter',
                    'backdrop_path': '/yYS8wtp7PgRcugt6EUMhv95NnaK.jpg',
                    'popularity': 2.98005,
                    'vote_count': 18,
                    'video': false,
                    'vote_average': 4.53
                }
            ]
        };
    },

    render() {
        return (
            <div className="movie-player">
                <div className="movie-dislike">
                    <MovieList movies={this.state.dislike} />
                </div>
                <div className="movie-cloud">
                    <MovieList movies={this.state.uncategorized} />
                </div>
                <div className="movie-like">
                    <MovieList movies={this.state.like} />
                </div>
            </div>
        );
    }
});

export default DragDropContext(HTML5Backend)(Main);
