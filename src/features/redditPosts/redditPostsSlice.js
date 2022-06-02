// reddit post slice redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*
export const loadRedditPosts = createAsyncThunk(
    'redditsPosts/loadRedditPosts',
    async () => {
        const data = await fetch('');
        const json = await data.json();
        return json;
    }
)
*/

export const redditPostsSlice = createSlice({
    name: "redditPosts",
    initialState: {
        posts: [
          {
            approved_at_utc: null,
            subreddit: 'pics',
            selftext: '',
            author_fullname: 't2_88taisbc',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'Woke Up To My Cat Laying Just Purrfectly Where My Light Catcher Was Shining A Rainbow [OC]',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/pics',
            hidden: false,
            pwls: 6,
            link_flair_css_class: null,
            downs: 0,
            thumbnail_height: 140,
            top_awarded_type: null,
            hide_score: false,
            name: 't3_v398u9',
            quarantine: false,
            link_flair_text_color: 'dark',
            upvote_ratio: 0.96,
            author_flair_background_color: '',
            subreddit_type: 'public',
            ups: 11556,
            total_awards_received: 2,
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: null,
            can_mod_post: false,
            score: 11556,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: true,
            thumbnail: 'https://b.thumbs.redditmedia.com/1fuSvMpqZn6vT2qImSGYSruw7Gri8DDivQm2oTAtLfw.jpg',
            edited: false,
            author_flair_css_class: 'Tier2',
            author_flair_richtext: [],
            gildings: {
              gid_1: 1
            },
            post_hint: 'image',
            content_categories: [
              'photography'
            ],
            is_self: false,
            mod_note: null,
            created: 1654177581,
            link_flair_type: 'text',
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: 'text',
            domain: 'i.redd.it',
            allow_live_comments: true,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            url_overridden_by_dest: 'https://i.redd.it/yxoy974np7391.jpg',
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://preview.redd.it/yxoy974np7391.jpg?auto=webp&amp;s=500d2a68bab129b83ef92e9a2eea8ec708bc9bf3',
                    width: 3072,
                    height: 4080
                  },
                  resolutions: [
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=aa308a70c6cb3f0b226263fda2242a56aacb063c',
                      width: 108,
                      height: 143
                    },
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=0135ac7daae437083f737f57ee4b8bc86e851fc5',
                      width: 216,
                      height: 286
                    },
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=94dd0aa8c8dc00c19eba9fbcdf0a97d9aefb78ee',
                      width: 320,
                      height: 425
                    },
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=97a86c02b27b2887f2d61bac7a9a88c52e71943c',
                      width: 640,
                      height: 850
                    },
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=346f453af3f2a367d8b1f4ae53b34e6b6ad1d856',
                      width: 960,
                      height: 1275
                    },
                    {
                      url: 'https://preview.redd.it/yxoy974np7391.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=0ea44eb18c58495ceaff0e1f0c8353e22513986c',
                      width: 1080,
                      height: 1434
                    }
                  ],
                  variants: {},
                  id: '0yf9FAEnCmoi0qYAQHGg-d1_R86o1q25KJ7iBU-tH5I'
                }
              ],
              enabled: true
            },
            all_awardings: [
              {
                giver_coin_reward: null,
                subreddit_id: null,
                is_new: false,
                days_of_drip_extension: null,
                coin_price: 100,
                id: 'gid_1',
                penny_donate: null,
                award_sub_type: 'GLOBAL',
                coin_reward: 0,
                icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png',
                days_of_premium: null,
                tiers_by_required_awardings: null,
                resized_icons: [
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
                    width: 128,
                    height: 128
                  }
                ],
                icon_width: 512,
                static_icon_width: 512,
                start_date: null,
                is_enabled: true,
                awardings_required_to_grant_benefits: null,
                description: 'Shows the Silver Award... and that\'s it.',
                end_date: null,
                subreddit_coin_reward: 0,
                count: 1,
                static_icon_height: 512,
                name: 'Silver',
                resized_static_icons: [
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
                    width: 128,
                    height: 128
                  }
                ],
                icon_format: null,
                icon_height: 512,
                penny_price: null,
                award_type: 'global',
                static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png'
              },
              {
                giver_coin_reward: null,
                subreddit_id: null,
                is_new: false,
                days_of_drip_extension: null,
                coin_price: 125,
                id: 'award_5f123e3d-4f48-42f4-9c11-e98b566d5897',
                penny_donate: null,
                award_sub_type: 'GLOBAL',
                coin_reward: 0,
                icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png',
                days_of_premium: null,
                tiers_by_required_awardings: null,
                resized_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b',
                    width: 128,
                    height: 128
                  }
                ],
                icon_width: 2048,
                static_icon_width: 2048,
                start_date: null,
                is_enabled: true,
                awardings_required_to_grant_benefits: null,
                description: 'When you come across a feel-good thing.',
                end_date: null,
                subreddit_coin_reward: 0,
                count: 1,
                static_icon_height: 2048,
                name: 'Wholesome',
                resized_static_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b',
                    width: 128,
                    height: 128
                  }
                ],
                icon_format: null,
                icon_height: 2048,
                penny_price: null,
                award_type: 'global',
                static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png'
              }
            ],
            awarders: [],
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qh0u',
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'v398u9',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'KohanaCat',
            discussion_type: null,
            num_comments: 143,
            send_replies: true,
            whitelist_status: 'all_ads',
            contest_mode: false,
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: 'dark',
            permalink: '/r/pics/comments/v398u9/woke_up_to_my_cat_laying_just_purrfectly_where_my/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.redd.it/yxoy974np7391.jpg',
            subreddit_subscribers: 29024351,
            created_utc: 1654177581,
            num_crossposts: 4,
            media: null,
            is_video: false,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
          },
          {
            approved_at_utc: null,
            subreddit: 'pics',
            selftext: '',
            author_fullname: 't2_5n134n20',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: '[OC] My one eyed beauty',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/pics',
            hidden: false,
            pwls: 6,
            link_flair_css_class: null,
            downs: 0,
            thumbnail_height: 140,
            top_awarded_type: null,
            hide_score: false,
            name: 't3_v352r2',
            quarantine: false,
            link_flair_text_color: 'dark',
            upvote_ratio: 0.95,
            author_flair_background_color: '',
            subreddit_type: 'public',
            ups: 12862,
            total_awards_received: 3,
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: null,
            can_mod_post: false,
            score: 12862,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: false,
            thumbnail: 'https://a.thumbs.redditmedia.com/sEWsXFyrKn0KrbikApOG9GIF64xSidC8nwidI13Qui4.jpg',
            edited: false,
            author_flair_css_class: 'Tier2',
            author_flair_richtext: [],
            gildings: {
              gid_1: 1
            },
            post_hint: 'image',
            content_categories: [
              'photography'
            ],
            is_self: false,
            mod_note: null,
            created: 1654162735,
            link_flair_type: 'text',
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: 'text',
            domain: 'i.redd.it',
            allow_live_comments: true,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            url_overridden_by_dest: 'https://i.redd.it/18dgqe6kh6391.jpg',
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://preview.redd.it/18dgqe6kh6391.jpg?auto=webp&amp;s=e41d910cd22924dbcf8e32e8e56cbadd1841c048',
                    width: 2057,
                    height: 3006
                  },
                  resolutions: [
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=09c8c6fa1f3aac22a0f7b9db698cfbe8b9994349',
                      width: 108,
                      height: 157
                    },
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=20178a3acb973dc0770b1d27a9e75a911726f069',
                      width: 216,
                      height: 315
                    },
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=80973476da2674c4300f5bec7cd61476fa3a09f8',
                      width: 320,
                      height: 467
                    },
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=72287aa829b7826fd51530132c28ad223d5cd8ae',
                      width: 640,
                      height: 935
                    },
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=33d1cab96de5447f25f78fa81ef42105cac4aa7a',
                      width: 960,
                      height: 1402
                    },
                    {
                      url: 'https://preview.redd.it/18dgqe6kh6391.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=008fcb18f89a1ebdc2d91eabce0c28a071663cb2',
                      width: 1080,
                      height: 1578
                    }
                  ],
                  variants: {},
                  id: 'QDkqTOZf2sfc7e4z76oQndYdyEh8ADnn8kFgQxA63As'
                }
              ],
              enabled: true
            },
            all_awardings: [
              {
                giver_coin_reward: null,
                subreddit_id: null,
                is_new: false,
                days_of_drip_extension: null,
                coin_price: 150,
                id: 'award_f44611f1-b89e-46dc-97fe-892280b13b82',
                penny_donate: null,
                award_sub_type: 'GLOBAL',
                coin_reward: 0,
                icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png',
                days_of_premium: null,
                tiers_by_required_awardings: null,
                resized_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878',
                    width: 128,
                    height: 128
                  }
                ],
                icon_width: 2048,
                static_icon_width: 2048,
                start_date: null,
                is_enabled: true,
                awardings_required_to_grant_benefits: null,
                description: 'Thank you stranger. Shows the award.',
                end_date: null,
                subreddit_coin_reward: 0,
                count: 1,
                static_icon_height: 2048,
                name: 'Helpful',
                resized_static_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878',
                    width: 128,
                    height: 128
                  }
                ],
                icon_format: null,
                icon_height: 2048,
                penny_price: null,
                award_type: 'global',
                static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png'
              },
              {
                giver_coin_reward: null,
                subreddit_id: null,
                is_new: false,
                days_of_drip_extension: null,
                coin_price: 30,
                id: 'award_c4b2e438-16bb-4568-88e7-7893b7662944',
                penny_donate: null,
                award_sub_type: 'PREMIUM',
                coin_reward: 0,
                icon_url: 'https://i.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png',
                days_of_premium: null,
                tiers_by_required_awardings: null,
                resized_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=16&amp;height=16&amp;auto=webp&amp;s=1a331be5cf6d754b4cb7ed2ca3706f70d5260a57',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=32&amp;height=32&amp;auto=webp&amp;s=6d0a6351d4080286095df432f95a103cdf4188f2',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=48&amp;height=48&amp;auto=webp&amp;s=913e99a6f6688f26c08dcb411f043f71b17df931',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=64&amp;height=64&amp;auto=webp&amp;s=e3ad9900371bf1f91eb422b4d000b3a1c0d5a9c4',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=128&amp;height=128&amp;auto=webp&amp;s=4cc281fbace61e034477d2bdb7b158913457863d',
                    width: 128,
                    height: 128
                  }
                ],
                icon_width: 2048,
                static_icon_width: 2048,
                start_date: null,
                is_enabled: true,
                awardings_required_to_grant_benefits: null,
                description: 'A glittering stamp for a feel-good thing',
                end_date: null,
                subreddit_coin_reward: 0,
                count: 1,
                static_icon_height: 2048,
                name: 'Wholesome Seal of Approval',
                resized_static_icons: [
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=16&amp;height=16&amp;auto=webp&amp;s=1a331be5cf6d754b4cb7ed2ca3706f70d5260a57',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=32&amp;height=32&amp;auto=webp&amp;s=6d0a6351d4080286095df432f95a103cdf4188f2',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=48&amp;height=48&amp;auto=webp&amp;s=913e99a6f6688f26c08dcb411f043f71b17df931',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=64&amp;height=64&amp;auto=webp&amp;s=e3ad9900371bf1f91eb422b4d000b3a1c0d5a9c4',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://preview.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=128&amp;height=128&amp;auto=webp&amp;s=4cc281fbace61e034477d2bdb7b158913457863d',
                    width: 128,
                    height: 128
                  }
                ],
                icon_format: null,
                icon_height: 2048,
                penny_price: null,
                award_type: 'global',
                static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png'
              },
              {
                giver_coin_reward: null,
                subreddit_id: null,
                is_new: false,
                days_of_drip_extension: null,
                coin_price: 100,
                id: 'gid_1',
                penny_donate: null,
                award_sub_type: 'GLOBAL',
                coin_reward: 0,
                icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png',
                days_of_premium: null,
                tiers_by_required_awardings: null,
                resized_icons: [
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
                    width: 128,
                    height: 128
                  }
                ],
                icon_width: 512,
                static_icon_width: 512,
                start_date: null,
                is_enabled: true,
                awardings_required_to_grant_benefits: null,
                description: 'Shows the Silver Award... and that\'s it.',
                end_date: null,
                subreddit_coin_reward: 0,
                count: 1,
                static_icon_height: 512,
                name: 'Silver',
                resized_static_icons: [
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
                    width: 16,
                    height: 16
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
                    width: 32,
                    height: 32
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
                    width: 48,
                    height: 48
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
                    width: 64,
                    height: 64
                  },
                  {
                    url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
                    width: 128,
                    height: 128
                  }
                ],
                icon_format: null,
                icon_height: 512,
                penny_price: null,
                award_type: 'global',
                static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png'
              }
            ],
            awarders: [],
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qh0u',
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'v352r2',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'Appropriate-Hope-898',
            discussion_type: null,
            num_comments: 125,
            send_replies: false,
            whitelist_status: 'all_ads',
            contest_mode: false,
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: 'dark',
            permalink: '/r/pics/comments/v352r2/oc_my_one_eyed_beauty/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.redd.it/18dgqe6kh6391.jpg',
            subreddit_subscribers: 29024351,
            created_utc: 1654162735,
            num_crossposts: 1,
            media: null,
            is_video: false,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
          },
          {
            approved_at_utc: null,
            subreddit: 'pics',
            selftext: '',
            author_fullname: 't2_9a845',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: '[OC] What my Grandpa ate for Xmas 1946. He was in the Royal Air Force stationed in Bordeaux, France',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/pics',
            hidden: false,
            pwls: 6,
            link_flair_css_class: null,
            downs: 0,
            thumbnail_height: 140,
            top_awarded_type: null,
            hide_score: false,
            name: 't3_v3axw3',
            quarantine: false,
            link_flair_text_color: 'dark',
            upvote_ratio: 0.97,
            author_flair_background_color: '',
            subreddit_type: 'public',
            ups: 2914,
            total_awards_received: 0,
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: null,
            can_mod_post: false,
            score: 2914,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: true,
            thumbnail: 'https://b.thumbs.redditmedia.com/j96EItK-ZXDja66jud7aJKABXKWXBdIHV71tmMFUFas.jpg',
            edited: false,
            author_flair_css_class: 'Tier2',
            author_flair_richtext: [],
            gildings: {},
            post_hint: 'image',
            content_categories: [
              'photography'
            ],
            is_self: false,
            mod_note: null,
            created: 1654182336,
            link_flair_type: 'text',
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: 'text',
            domain: 'i.redd.it',
            allow_live_comments: true,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            url_overridden_by_dest: 'https://i.redd.it/9bntqvrt38391.jpg',
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://preview.redd.it/9bntqvrt38391.jpg?auto=webp&amp;s=3569bbc3850c7f41907ae76a8face65c12c8b68d',
                    width: 3024,
                    height: 4032
                  },
                  resolutions: [
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=63aa253b9f35a548d31d7ddee3dc33d0b30ad8b3',
                      width: 108,
                      height: 144
                    },
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=55c394ceb5f88dc3eed39c499304fdadd183613a',
                      width: 216,
                      height: 288
                    },
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=f1bbaab8584d345a702cf3ea2dd391216267fef2',
                      width: 320,
                      height: 426
                    },
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=b59883a26a24d9dcbbd206323dfca80352166e0e',
                      width: 640,
                      height: 853
                    },
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=0e56599101e361b5643739c5a086d0b6277cecae',
                      width: 960,
                      height: 1280
                    },
                    {
                      url: 'https://preview.redd.it/9bntqvrt38391.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=11826de08f2f2d3d8ae9728472470bcda84cee4f',
                      width: 1080,
                      height: 1440
                    }
                  ],
                  variants: {},
                  id: 'P-shU-V1YrSpaV8Hx13UEzWVO5plfGWtsNgItJ9cd4U'
                }
              ],
              enabled: true
            },
            all_awardings: [],
            awarders: [],
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qh0u',
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'v3axw3',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'pigletpoppet',
            discussion_type: null,
            num_comments: 173,
            send_replies: false,
            whitelist_status: 'all_ads',
            contest_mode: false,
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: 'dark',
            permalink: '/r/pics/comments/v3axw3/oc_what_my_grandpa_ate_for_xmas_1946_he_was_in/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.redd.it/9bntqvrt38391.jpg',
            subreddit_subscribers: 29024351,
            created_utc: 1654182336,
            num_crossposts: 2,
            media: null,
            is_video: false,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
          },
          {
            approved_at_utc: null,
            subreddit: 'pics',
            selftext: '',
            author_fullname: 't2_12x8ej',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'Calling it a day [OC]',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/pics',
            hidden: false,
            pwls: 6,
            link_flair_css_class: null,
            downs: 0,
            thumbnail_height: 105,
            top_awarded_type: null,
            hide_score: false,
            name: 't3_v3cs01',
            quarantine: false,
            link_flair_text_color: 'dark',
            upvote_ratio: 0.92,
            author_flair_background_color: '',
            subreddit_type: 'public',
            ups: 1332,
            total_awards_received: 0,
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: false,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: null,
            can_mod_post: false,
            score: 1332,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: false,
            thumbnail: 'https://b.thumbs.redditmedia.com/X02EUovW_Siq-TpE0yrCxggyx95fesvI8db7FhMhvxo.jpg',
            edited: false,
            author_flair_css_class: 'Tier2',
            author_flair_richtext: [],
            gildings: {},
            post_hint: 'image',
            content_categories: [
              'photography'
            ],
            is_self: false,
            mod_note: null,
            created: 1654187277,
            link_flair_type: 'text',
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: 'text',
            domain: 'i.imgur.com',
            allow_live_comments: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            url_overridden_by_dest: 'https://i.imgur.com/PSPGhiV.jpg',
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?auto=webp&amp;s=b38f730db6cd0fab8329e8885ac151ada04392e9',
                    width: 2016,
                    height: 1512
                  },
                  resolutions: [
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=858fa3fe2f2608a5ca38ca9cbc70d060d228aab5',
                      width: 108,
                      height: 81
                    },
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a6cc961d2e0216c477c1da53696dffb125976e58',
                      width: 216,
                      height: 162
                    },
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=fdbb5dabe1a0dec4f0de8ab6a3076cc1231d291f',
                      width: 320,
                      height: 240
                    },
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=3ef4c4238983bd8e4546a2c583a81d08580c6f56',
                      width: 640,
                      height: 480
                    },
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=93899e711293c6e772e3e5e1ba42ce1f7cbd00bc',
                      width: 960,
                      height: 720
                    },
                    {
                      url: 'https://external-preview.redd.it/6Gosi6-T8rwrq33YzCqpbBCpEZUu2wMwsq4M5PMOFZM.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=a4a5aee55c6d335d9e97239fe5e107a3da66d79d',
                      width: 1080,
                      height: 810
                    }
                  ],
                  variants: {},
                  id: 'WxdTnL2d9grNY441kSG1L_7mWugKglQI0H7L4jzcfBY'
                }
              ],
              enabled: true
            },
            all_awardings: [],
            awarders: [],
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qh0u',
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'v3cs01',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'joedoe23',
            discussion_type: null,
            num_comments: 62,
            send_replies: true,
            whitelist_status: 'all_ads',
            contest_mode: false,
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: 'dark',
            permalink: '/r/pics/comments/v3cs01/calling_it_a_day_oc/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.imgur.com/PSPGhiV.jpg',
            subreddit_subscribers: 29024351,
            created_utc: 1654187277,
            num_crossposts: 0,
            media: null,
            is_video: false,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
          },
        ],
        hasError: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: "r/Home"
    },
    reducers: {},
    /*
    extraReducers: (builder) => {
        builder
            .addCase(loadRedditPosts.pending, (state) => {
                state.hasError = false;
                state.isLoading = true;
            })
            .addCase(loadRedditPosts.fulfilled, (state, action) => {
                state.hasError = false;
                state.isLoading = false;
                state.posts = action.payload
            })
            .addCase(loadRedditPosts.rejected, (state) => {
                state.hasError = true;
                state.isLoading = false;
                state.posts = [];
            })
    }
    */
})

export const selectAllPosts = (state) => state.redditPosts.posts;
export const isLoading = (state) => state.redditPosts.isLoading;
export default redditPostsSlice.reducer;