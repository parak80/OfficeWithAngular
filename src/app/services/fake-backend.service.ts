import {InMemoryDbService} from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const tasks = [
            { id: 1, documentId: 'KS2014/42', name: 'search-result 1' },
            { id: 2, documentId: 'KS2014/42', name: 'search result 2' },
            { id: 3, documentId: 'KS2014/42', name: 'search result 3' },
            { id: 4, documentId: 'KS2014/42', name: 'search result 4' },
            { id: 5, documentId: 'KS2014/42', name: 'search-result 5' },
            { id: 6, documentId: 'KS2014/42', name: 'search result 6' },
            { id: 7, documentId: 'KS2014/42', name: 'search result 7' },
            { id: 8, documentId: 'KS2014/42', name: 'search result 8' }
        ];
        return {tasks};
    }
}
