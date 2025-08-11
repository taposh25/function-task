 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function totalMonthSalary(employees){
            let total = 0;
            for( let emp of employees){
                let currentSalary = emp.starting + (emp.experience * emp.increment);
                total = total + currentSalary;

            }
            return total;

        }
        const employee =   totalMonthSalary(employees);
        console.log(employee);