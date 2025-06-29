import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { UPSTASH_HTTP, UPSTASH_TOKEN } from '../config/env.js'

// create redis
const redis = new Redis({
    url: UPSTASH_HTTP,
    token: UPSTASH_TOKEN,
})

// define rate limit 10 by 30 sec
const reateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, "60 s") // rate,time/s
});

export default reateLimit; 