import { TwitterFollowCard } from "./TwitterFollowCard"
export function App() {

    const formatUserName = (userName) => `@${userName}`;

    return (
    <div className="App">
    <TwitterFollowCard 
        formatUserName={formatUserName} 
        initialIsFollowing userName="KingJames">
        Lebron James
    </TwitterFollowCard>

    <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="kingcode.15" >
        Samuel Vilorio
    </TwitterFollowCard>

    <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="ybc_25">
        Yarisa Batista
    </TwitterFollowCard>
    </div>
    )
    
}