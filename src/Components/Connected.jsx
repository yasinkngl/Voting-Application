import React from "react";

const Connected = ({ account, candidates, remainingTime, voteFunction, showButton }) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {account}</p>
            <p className="connected-account">Remaining Time: {remainingTime}</p>
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                    <th>Vote</th>
                </tr>
                </thead>
                <tbody>
                {candidates.map((candidate, index) => (
                    <tr key={index}>
                        <td>{candidate.index}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.voteCount}</td>
                        <td>
                            <button onClick={() => voteFunction(index)} disabled={!showButton}>Vote
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;