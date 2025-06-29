import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { UPSTASH_HTTP, UPSTASH_TOKEN } from '../config/env.js'

// create redis
const redis = new Redis({
    url: UPSTASH_HTTP,
    token: UPSTASH_TOKEN,
})

// define rate limit 100 by 60 sec
const reateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, "20 s") // rate,time/s
});

export default reateLimit; 