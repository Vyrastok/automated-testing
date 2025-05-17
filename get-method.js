const axios = require('axios');

const token = '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';
const headers = {
    'Authorization': `token ${token}`,
};

// 1. GET (всі записи)
axios.get('https://api.github.com/user/repos', { headers })
    .then(response => {
        console.log('All Repos:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 2. GET (конкретний запис)
axios.get('https://api.github.com/repos/Vyrastok/automated-testing', { headers })
    .then(response => {
        console.log('Repository Details:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 3. POST (створення нового ресурсу)
axios.post('https://api.github.com/user/repos', {
        name: 'new-repository',
        description: 'This is a new repository created via API',
        private: false,
    }, { headers })
    .then(response => {
        console.log('Created Repository:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 4. PUT (оновлення ресурсу)
axios.put('https://api.github.com/repos/Vyrastok/automated-testing', {
        description: 'Updated description for the repository',
    }, { headers })
    .then(response => {
        console.log('Updated Repository:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 5. DELETE (видалення ресурсу)
axios.delete('https://api.github.com/repos/Vyrastok/automated-testing', { headers })
    .then(response => {
        console.log('Repository Deleted');
    })
    .catch(error => {
        console.error('Error:', error);
    });