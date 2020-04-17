import HttpCore from './HttpCore';

function CoreService() {
    CoreService.prototype.getAllContents = () => {
        return HttpCore.get(`http://localhost:4000/api/contents`);
    };

    CoreService.prototype.getContentById = id => {
        return HttpCore.get(`http://localhost:4000/api/contents/${id}`);
    };

    CoreService.prototype.saveContent = req => {
        return HttpCore.post(`http://localhost:4000/api/contents`, req);
    };
}

export default new CoreService();
