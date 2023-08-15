import api from "./axIos"

export const createOrganization = (data) => {
    return api.post('organizations/',data);
};


export const getOrganizations = () => {
    return api.get('organizations/');
};



export const deleteOrganizations = (id) => {
    return api.delete(`organizations/${id}/`);
};

