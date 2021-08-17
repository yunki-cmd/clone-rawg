
import logonitendo from "../../public/assets/icons/nintendo.svg";
import logoxbox from "../../public/assets/icons/xbox.svg";
import logopc from "../../public/assets/icons/pc.svg";
import logoplaystation from "../../public/assets/icons/playstation.svg";
import { useCallback } from "react";
function CardGame({id,
          background_image,
          slug,
          platforms,
          metacritic,
          name,}) {
  

  const score = useCallback(function (score) {
    const score2 = parseInt(score);
    if (score2 <= 50) return "text-red-500 border-red-500";
    if (score2 > 50 && score2 <= 75) return "text-yellow-500 border-yellow-500";
    return "text-green-500 border-green-500";
  },[])
  
  const plataformas = useCallback(function (id) {
    const plataforms = {
      7: logonitendo,
      1: logoxbox,
      4: logopc,
      18: logoplaystation,
      default:logonitendo
    };
    return plataforms[id] || plataforms["default"]
 },[])
 


  
  return (
    <>
      <div className="my-4" key={id} >
        <div className="flex flex-col text-white bg-gray-800 rounded-lg">
          <div>
            <img className="rounded-xl" src={background_image} alt={slug} />
          </div>
          <div>
            <div className="flex gap-1 my-3">
              {platforms.map((elem) => {
                return (
                  <div className="p-1" key={elem.platform.id}>
                    <img
                      className="h-5 w-5"
                      src={plataformas(elem.platform.id)}
                      alt={elem.platform.name}
                    />
                  </div>
                );
              })}
              <div
                className={` font-bold tracking-wider border p-1 ${score(
                  metacritic
                )} `}
              >
                {metacritic}
              </div>
            </div>
            <div className="capitalize text-2xl font-bold my-3">{name}</div>
          </div>
        </div>
      </div>
    </>
  );


}
export default CardGame

/* const datos = [
  {
    id: 3328,
    slug: "the-witcher-3-wild-hunt",
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    rating: 4.67,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 3543,
        percent: 77.87,
      },
      {
        id: 4,
        title: "recommended",
        count: 714,
        percent: 15.69,
      },
      {
        id: 3,
        title: "meh",
        count: 190,
        percent: 4.18,
      },
      {
        id: 1,
        title: "skip",
        count: 103,
        percent: 2.26,
      },
    ],
    ratings_count: 4485,
    reviews_text_count: 47,
    added: 13393,
    added_by_status: {
      yet: 742,
      owned: 7609,
      beaten: 3199,
      toplay: 568,
      dropped: 587,
      playing: 688,
    },
    metacritic: 92,
    playtime: 49,
    suggestions_count: 669,
    updated: "2020-10-02T00:57:03",
    user_game: null,
    reviews_count: 4550,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 4455,
          image_background:
            "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 4769,
          image_background:
            "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 350340,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5998,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          slug: "nintendo",
        },
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 123533,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 90908,
        image_background:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 38029,
        image_background:
          "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
      },
    ],
    stores: [
      {
        id: 354780,
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
          domain: "gog.com",
          games_count: 3481,
          image_background:
            "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg",
        },
      },
      {
        id: 3565,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7659,
          image_background:
            "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        },
      },
      {
        id: 305376,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 53402,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
      },
      {
        id: 312313,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4354,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 124097,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 14684,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 10429,
        image_background:
          "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3148,
        image_background:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 12231,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 10792,
        image_background:
          "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 3970,
        image_background:
          "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 4767,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 14265,
        image_background:
          "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 3712,
        image_background:
          "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 3620,
        image_background:
          "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 7905,
        image_background:
          "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
      },
      {
        id: 44,
        name: "Nudity",
        slug: "nudity",
        language: "eng",
        games_count: 2749,
        image_background:
          "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
      },
      {
        id: 336,
        name: "controller support",
        slug: "controller-support",
        language: "eng",
        games_count: 293,
        image_background:
          "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 958,
        image_background:
          "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
      },
      {
        id: 145,
        name: "Choices Matter",
        slug: "choices-matter",
        language: "eng",
        games_count: 1327,
        image_background:
          "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
      },
      {
        id: 40,
        name: "Dark Fantasy",
        slug: "dark-fantasy",
        language: "eng",
        games_count: 1733,
        image_background:
          "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
      },
      {
        id: 66,
        name: "Medieval",
        slug: "medieval",
        language: "eng",
        games_count: 3064,
        image_background:
          "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg",
      },
      {
        id: 82,
        name: "Magic",
        slug: "magic",
        language: "eng",
        games_count: 5061,
        image_background:
          "https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg",
      },
      {
        id: 218,
        name: "Multiple Endings",
        slug: "multiple-endings",
        language: "eng",
        games_count: 3562,
        image_background:
          "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
    },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 30336,
        image:
          "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
      },
      {
        id: 30337,
        image:
          "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
      },
      {
        id: 30338,
        image:
          "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
      },
      {
        id: 30339,
        image:
          "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
      },
      {
        id: 30340,
        image:
          "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
      },
      {
        id: 30342,
        image:
          "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
      },
    ],
  },
]; */