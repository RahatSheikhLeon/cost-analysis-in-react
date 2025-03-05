import { useEffect } from "react";
export function Setting({memberInfo, setMemberInfo}){


    function deleteData() {
        const confirmDelete = confirm("Are you sure you want to delete your data?");

        if (confirmDelete) {
            localStorage.removeItem("memberInfo");
            location.reload();
        } else {
            return;
        }
    }
    


    const saveJSONFile = () => {
        const blob = new Blob([JSON.stringify(memberInfo, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "memberInfo.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const loadJSONFile = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                setMemberInfo(data);
                localStorage.setItem("memberInfo", JSON.stringify(data));
            } catch (error) {
                console.error("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    };

    
    return(
        <>
           <div className="flex" style={{ marginTop: "20px", justifyContent: "space-between" }}>
                <button onClick={deleteData}>Delete All data</button>
                <input type="file" accept="application/json" onChange={loadJSONFile} className="jaon-upload" />
                <button onClick={saveJSONFile}>Save to JSON</button>
            </div>
        </>
    )
}